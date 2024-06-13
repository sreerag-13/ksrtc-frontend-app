import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const[sin,changedata]=useState(
        {
            
            

                
                "Email":"",
                "Password":""
               
            
            

        }
    )
   const inputhandler=(event)=>{
        changedata({...sin,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(sin)
        axios.post("",sin).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("success")
                
            } else {
                alert("error")
                
            }
        }
        )
    }
  return (
    <div>
     
     <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="row g-3">
                                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='Email' value={sin.Email} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control"name='Password' value={sin.Password} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readvalue}>sigin</button>
                        <br></br>
                        <a href="/">home</a>
                        <br></br>
                        <a href="/Sign">register</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login