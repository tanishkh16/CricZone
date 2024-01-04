import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MatchList from './Components/MatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Schedule from './Components/Schedule';
import Home from './Home';
import Domestic from './Components/Domestic';
import Leagues from './Components/Leagues';
import Women from './Components/Women';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider';
import {AuthorizeUser} from './Middleware/Auth';
import {LoginRouter} from './Middleware/Auth';
import ForgetPassword from './Components/ForgetPassword';
import News from './Components/News';
import Subscription from './Components/Subscription';
import Payment from './Components/Payment';
import PaymentDone from './Components/PaymentDone';
import { SubscriptionRouter } from './Middleware/Auth';
import Premium from './Components/Premium';
import Rankings from './Components/Rankings';
import Team from './Components/Team';
import IPL from './Components/IPL';
import Image from './Components/Image';

function App() {
  return (
  
  <div>
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/schedule' element={<AuthorizeUser><Schedule/></AuthorizeUser>} />
<Route path='/domestic' element={<AuthorizeUser><Domestic/></AuthorizeUser>} />
<Route path='/leagues' element={<AuthorizeUser><Leagues/></AuthorizeUser>} />
<Route path='/women' element={<AuthorizeUser><Women/></AuthorizeUser>}/>
<Route path='/news' element={<AuthorizeUser><News/></AuthorizeUser>}/>
<Route path='/login' element ={<LoginRouter><Login/></LoginRouter>}/>
<Route path='/signup' element ={<LoginRouter><Signup/></LoginRouter>}/>
<Route
            path='/profile'
            element={<AuthorizeUser><Profile /></AuthorizeUser>}
          />
<Route path='/forget' element={<ForgetPassword/>}/>
<Route path='/subscribe' element={<AuthorizeUser><Subscription/></AuthorizeUser>}/>
<Route path='/payment' element={<AuthorizeUser><Payment/></AuthorizeUser>}/>
<Route path="/:id" element={<AuthorizeUser><PaymentDone/></AuthorizeUser>} />
  <Route path="/premium" element={<SubscriptionRouter><Premium/></SubscriptionRouter>}></Route>
<Route path='/ranking' element={<AuthorizeUser><Rankings/></AuthorizeUser>}></Route>
<Route path='/team' element={<AuthorizeUser><Team/></AuthorizeUser>}></Route>
<Route path='/ipl' element={<AuthorizeUser><IPL/></AuthorizeUser>}></Route>
<Route path='/image' element={<Image/>}></Route>
<Route path='/matchlist' element={<MatchList/>} />
</Routes>
</BrowserRouter>


</div>

 
  );
}

export default App;
