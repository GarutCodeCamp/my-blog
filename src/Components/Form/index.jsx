import React from 'react'
import "./index.css"
import login from "../../image/Login.jpg"
import register from "../../image/Register.jpg"

export const Field = (props) => {
    return (
       <div className="row size">
           <div className="col-lg-8">
               <img src={props.img? login : register} className="img" alt="" />
           </div>
           <div className="col-lg-4 bg-light d-flex flex-column justify-content-center">
               {props.children}
           </div>
       </div>
    )
}
