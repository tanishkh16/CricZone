import express from "express";
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import morgan from "morgan";
dotenv.config();
import dotenv from 'dotenv'
import Cookies from "js-cookie";
import stripe from "stripe";

const stripeInstance=stripe("sk_test_51OHAA3SETXDcTTgLQ0xIsrhaU2mErakLOqnYZwAiLDZrNjtlg1KkZMEtKLcXSgMSgm0mL2gg26cHgqpN3MlV0zX300REwBnmu3")



const app = express();

mongoose.connect("mongodb+srv://Tanish:Tanish@cluster0.zb4jbjo.mongodb.net/?retryWrites=true&w=majority")

app.use(morgan('tiny'));
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000',
  };
  
  app.use(cors(corsOptions));

  app.use(cookieParser());


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        unique:true,
    },
    password:{ 
        type:String,
        required:true,
    },
    subscription:{
        type:Boolean,
        default:false
    
    },
    subsToken: {
        type: String,   // Assuming the token is a string
    },
    subsTokenExpires: {
        type: Date,
    },




});



const User = mongoose.model("User", UserSchema);
// const Payment = mongoose.model("Payment", PaymentSchema);

app.get("/", (req, res) => {
    res.send("Hello to API");
})

app.post("/signup", async (req, res) => {

    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;
    const hashedPassword= await bcryptjs.hash(password, 10);

    const user = new User({
       username,email,password:hashedPassword
    })
    user.save()
    .then(() => {
        res.send({message:"user registered",user});
        console.log("user registered");
    })
    .catch((err) => {
        console.log(err);
        res.send(err);
    })  



})

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const foundUser=await User.findOne({email:email});

    if(!foundUser){
        console.log("user not found");
        return res.status(400).send("Invalid Credentials");
    }
    const isPasswordCorrect= await bcryptjs.compare(password, foundUser.password); 

    if(!isPasswordCorrect){
        return res.status(401).send("Invalid Credentials");

        console.log("Invalid Credentials");
    }
    if(isPasswordCorrect && foundUser){
        
        console.log("user logged in");
    }
     const tokenData={
        id:foundUser._id,
        email:foundUser.email,
        password:foundUser.password,
        subscription:foundUser.subscription,
    }

    const token=jwt.sign(tokenData, "tanish",{ expiresIn: '1d' });
    console.log(token);
    console.log(tokenData);

    res.cookie("accessToken", token, {
        httpOnly:true,
        expires: token.expiresIn
    })
   
    return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        token
    });


})

app.post("/logout", (req, res) => {
res.clearCookie("accessToken");
res.clearCookie("substoken");

res.status(200).json({
    success: true,
    message: "User logged out successfully"
});
})

app.get('/getuser',async (req, res) => {
    try{
        // const token = Cookies.get('accessToken');
        // const token = req.cookies.accessToken
        const token = req.headers.authorization?.split(' ')[1];
        console.log("s",token);
if(!token){
    return res.status(401).json({success: false, message: "User not logged in"});

}
const decoded = jwt.verify(token, "tanish");
console.log(decoded);
const user=await User.findOne({_id:decoded.id});
if(!user){
    return res.status(404).json({success: false, message: "User not found"});
}
return res.status(200).json({success: true,
    id: user._id,
    username: user.username,
    email: user.email,
    password: user.password


});
        
    }catch(err){
        console.log(err);
    }

}
)


// Payment

app.post("/payment", async (req, res) => {
    const userId = req.body.userId;
    console.log("userId",userId);
const session=await stripeInstance.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:[{
        price_data:{
            currency:"inr",
            product_data:{
                name:"cricket",
            },
            unit_amount:561*100,
        },
        quantity:1
    },
],
mode:"payment",

    success_url:`http://localhost:3000/${userId}`,
    cancel_url:"http://localhost:3000/news",
})

res.json({id:session.id});
})


// app.put("/:id", async (req, res) => {
//     try {
        
//         const newUser = await User.findById(req.params.id);
//         const tokenData={id:newUser._id}
//         const token = jwt.sign(tokenData, "tanish", { expiresIn: '1d' });

//         if (newUser) {
//             const updatedUser = await User.findByIdAndUpdate(req.params.id, {
//                 subscription: true,
//                 subsToken: token,  // Set the token value here
//                 subsTokenExpires: new Date(Date.now() + 1 * 60 * 1000),  // Set expiration date to 1 day from now
//             });
            
            
            
               

         

//             setTimeout(async () => {
//                const subscribeUser= await User.findByIdAndUpdate(req.params.id, {
//                     subscription: false,
//                     subsToken: null,
//                     subsTokenExpires: null,
//                 });
//                 console.log("Subscription status removed for user with ID  after one day.");
                
//             },  1 * 60 * 1000);
            
          
        
//             return res.status(200).json({
               
//                 success: true,
//                 message: "User logged in successfully",
//                 newToken
//             });
//         } else {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found",
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//         });
//     }
// });

const checkSubscriptionStatus = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (user && user.subscription && user.subsTokenExpires && new Date() > user.subsTokenExpires) {
            // Subscription has expired, update user's subscription status
            await User.findByIdAndUpdate(req.params.id, {
                subscription: false,
                subsToken: null,
                subsTokenExpires: null,
            });
           
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
app.put("/:id",checkSubscriptionStatus, async (req, res) => {
    try {
        const newUser = await User.findById(req.params.id);

        if (newUser) {
            const tokenData = { id: newUser._id };
            const token = jwt.sign(tokenData, "tanish", { expiresIn: '1d' });

            const expirationTime = 24 * 60* 60 * 1000; // 1 day

            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                subscription: true,
                subsToken: token,
                subsTokenExpires: new Date(Date.now() + expirationTime),
            });

          
            const timerId = setInterval(async () => {
                const updatedUser = await User.findById(req.params.id);
                if (updatedUser && updatedUser.subsTokenExpires < new Date()) {
                    // Subscription has expired, update user's subscription status
                    clearInterval(timerId);
                    await User.findByIdAndUpdate(req.params.id, {
                        subscription: false,
                        subsToken: null,
                        subsTokenExpires: null,
                    });
                    console.log("Subscription expired for user with ID:");
                }
            }, 1000);

            return res.status(200).json({
                success: true,
                message: "User logged in successfully",
                newToken: token,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

app.get("/subscribe/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user && user.subscription) {
            return res.status(200).json({
                success: true,
                message: "User has an active subscription",
                subscription: user.subscription
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "User does not have an active subscription",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
})

app.put("/check/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        if(user && user.subscription && user.subsTokenExpires && new Date()>user.subsTokenExpires){
            await User.findByIdAndUpdate(req.params.id,{
                subscription:false,
                subsToken:null,
                subsTokenExpires:null
            })
        }
        console.log("subscription status removed for user with id after one day")
      

    }catch(err){
        console.log(err)
    }
})


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});