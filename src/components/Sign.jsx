import axios from 'axios'
import React, { useState } from 'react'

const Sign = () => {
    const[sin,changedata]=useState(
        {
            
            

                "Name":"",
                "Email":"",
                "PhoneNo":"",
                "Gender":"",
                "Password":"",
                "ConfirmPassword":""
            
            

        }
    )
   const inputhandler=(event)=>{
        changedata({...sin,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(sin)
        axios.post("http://localhost:8081/signin",sin).then((response)=>{
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
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='Name' value={sin.Name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='Email' value={sin.Email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone no</label>
                            <input type="text" className="form-control" name='PhoneNo' value={sin.PhoneNo} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control" name='Gender' value={sin.Gender} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='Password' value={sin.Password} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="text" className="form-control" name='ConfirmPassword' value={sin.ConfirmPassword} onChange={inputhandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>register</button>
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

export default Sign