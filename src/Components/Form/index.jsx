import React from 'react'

export const Form = (props) => {
    return (
        <div className={`mb-3 mx-${props.margin} col-md-${props.width}`}>
             <label  className="form-label bold text-uppercase " aria-describedby={props.describe} >{props.label}</label>
             <input type={props.type} className="form-control" onChange={props.onChange} id={props.id} placeholder={props.placeholder} />
             {props.children}
        </div>
    )
}
