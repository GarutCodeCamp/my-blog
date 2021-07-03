import React from 'react'

export default function Button(props) {
    return (
        <div className="mb-3 col">
            <button className={`btn btn-${props.color} btn-outline-${props.outline} btn-${props.size} ${props.active} ${props.disbaled} text-${props.textStyle}`} type={props.type} onClick={props.onClick} >{props.name}</button>
        </div>
    )
}
