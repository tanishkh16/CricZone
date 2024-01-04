import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';


export const AuthorizeUser = ({ children }) => {
  const token = Cookies.get('accessToken');

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
//   if(token){
//     return <Navigate to="/profile" replace={true} />;
//   }

  return children;
};



export const LoginRouter = ({ children }) => {
const token = Cookies.get('accessToken');
   
if(token){
  return <Navigate to="/profile" replace={true} />
}
return children;
};



export const SubscriptionRouter = ({ children }) => {
  const token = Cookies.get('accessToken');
  const decodedToken = jwtDecode(token);
  console.log('Decoded Token:', decodedToken.id);

  const [subscription, setSubscription] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/subscribe/${decodedToken.id}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (res?.status === 200) {
          console.log("status", res.data.success);
          setSubscription(res?.data?.success);
          console.log("subscription", subscription);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [decodedToken?.id,subscription]);

  if (subscription === false) {
    return <Navigate to="/" replace={true} />;
  }
  // if (subscription === true) {
  //   return <Navigate to="/premium" replace={true} />;
  // }
  return <>{children}</>;
};
