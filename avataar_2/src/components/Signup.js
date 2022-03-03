import React,{state, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Signup() {
    const [state , setState]= useState({name:"",email:"",password:"",phone:""})
    let navigate= useNavigate();

  const onchange=(e)=>{
    setState({
      ...state, [e.target.name]:e.target.value
    })
  }

  const handleClick=(e)=>{
    e.preventDefault();
    checkUser(state.name,state.email,state.password,state.phone);
    setState({
      email:"",password:"",name:"",phone:""
    })
  }


  const checkUser= async (name,email,password,phone)=>{
    console.log("Hello");
    console.log(email);
    const url="http://localhost:8000/signup"
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({name,email,password,phone}) 
    });
    const json=await response.json();
    console.log(json);
    if(json.success){
      alert(`Welcome ${json.user.name}`);
      navigate('/user');
    }else{
      console.log("I am else");
      alert(`${json.error}`)
    }
  }


  return (
    <>
    <Navbar/>
      <div className="bodyContainer d-flex justify-content-center align-items-center my-5">
        <div className="card" style={{ width: "50rem", height: "30rem" }}>
          <div className="card-body">
            <form>
                <h1>Enter your Details to Sign Up</h1>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                onChange={onchange}
                  type="text"
                  value={state.name}
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Please write your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                onChange={onchange}
                  type="email"
                  value={state.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Registered Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                onChange={onchange}
                value={state.password}
                  type="password"
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone Number
                </label>
                <input
                onChange={onchange}
                value={state.phone}
                  type="text"
                  className="form-control"
                  name="phone"
                  id="number"
                  placeholder="Enter your phone number"
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
