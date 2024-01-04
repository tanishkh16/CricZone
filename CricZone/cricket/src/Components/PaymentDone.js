import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

export default function PaymentDone() {
  const navigate = useNavigate();

  const param = useParams();
  console.log(param.id)
  const date = new Date();

  const paymentDone = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/${param.id}`, { userID: param.id, Date: date },
        {
          headers: {
            "Content-Type": "application/json"
          }
        })
      if (res.status === 200) {
        const token = res.data.token;
        Cookies.set('substoken', token, { expires: 1 });
        const newToken = Cookies.get('substoken');
        console.log("newtoken", newToken);


      }
      navigate('/premium');


    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    paymentDone();
  }, [])

  return (
    <div>
      <h1>{param.id}jjj</h1>
    </div>
  )
}
