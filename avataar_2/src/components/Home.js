import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="bodyContainer d-flex justify-content-center align-items-center my-5">
    <div className="card" style={{width: "50rem", height:"25rem"}}>
  <div className="card-body">
    <h1 className="card-title d-flex justify-content-center my-3">Avataar_Users</h1>
    <h2 className="card-subtitle mb-2 text-muted d-flex justify-content-center my-3">Login_Signup Facility</h2>
    <h6 className="card-text d-flex justify-content-center my-4">
      Here on this platform we are providing you the login signup facility , by which you can easily signup on it Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusantium ab ratione! 
    </h6>
    <h5 className="card-text d-flex justify-content-center my-4 mb-2 text-muted">
      So for what are you waiting for....
    </h5>
    <h5 className="card-text d-flex justify-content-center my-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </h5>
    <div className="routes d-flex justify-content-between my-5">
    <button type="button" className="btn btn-primary mx-5"><a href="/signup" className="btn btn-primary">
                Sign Up
              </a></button>
    <button type="button" className="btn btn-primary mx-5"><a href="/login" className="btn btn-primary">
                Log In
              </a></button>

    
    </div>
  </div>
</div>
    </div>
    </>
  )
}
