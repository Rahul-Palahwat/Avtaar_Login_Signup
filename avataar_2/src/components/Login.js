import React,{state, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Login() {
  const [state , setState]= useState({email:"",password:""})
  let navigate= useNavigate();

  // const [user,setUser]=useState({name:"",emai:"",phone:""})


  const onchange=(e)=>{
    setState({
      ...state, [e.target.name]:e.target.value
    })
  }

  const handleClick=(e)=>{
    e.preventDefault();
    checkUser(state.email,state.password);
    setState({
      email:"",password:""
    })
  }


  const checkUser= async (email,password)=>{
    try {
    console.log("Hello");
    console.log(email);
    const url="http://localhost:8000/login"
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({email,password}) 
    });
    const json=await response.json();
    console.log(json);
    if(json.success){
      
      navigate('/user');
      alert(`Welcome ${json.user.name}`);
    }else{
      console.log("I am else");
      alert(`${json.error}`)
    }
  } catch (error) {
    console.log("Internal server Error");
      
  }
  }


  return (
    <>
    <Navbar/>
      <div className="bodyContainer d-flex justify-content-center align-items-center my-5">
        <div className="card" style={{ width: "50rem", height: "27rem" }}>
          <div className="card-body">
            <form>
                <h1>Enter your Details to Log In</h1>
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
