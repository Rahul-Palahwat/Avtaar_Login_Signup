import React from 'react'
import Navl from './Navl';

export default function User() {
  // const data=props;
    return (
      <>
      <Navl/>
        <div className="bodyContainer d-flex justify-content-center align-items-center my-5">
          <div className="card" style={{ width: "50rem", height: "27rem" }}>
            <div className="card-body ">
                  <h1 className='my-3 d-flex justify-content-center'>Welcome</h1>
                  <h2 className='my-5 d-flex justify-content-center'>You are successfully logged in</h2>
                
                
                
            </div>
          </div>
        </div>
      </>
    );
}
