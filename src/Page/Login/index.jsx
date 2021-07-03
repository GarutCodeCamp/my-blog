import React, { Component } from 'react'
import {Form} from '../../Components/Form'
import Button from '../../Components/Button'
import  './index.css'
export default class Login extends Component {
    render() {
        return (
            <div className="bg-img d-flex flex-column justify-content-center">
                <div className="bg-light bg-gradient col-md-6 container pt-2 d-flex shadow flex-column text-center rounded">
                <h1 className="text-center text-uppercase text-secondary  ">Sign Up</h1>
                    <Form label="Name"  width="7" margin="auto"  placeholder="Enter Name" type="text"/>        
                    <Form label="Email" width="7" margin="auto" placeholder="Enter Email" type="email" describe="emailHelp" />        
                    <Form label="Password" width="7" margin="auto" placeholder="Enter Password" type="password">
                     <div  className="form-text "> Your Password Must Be long 8 or 12 character</div>
                    </Form>   
                    <Button name="sign up" color="primary" textStyle="uppercase" type=""submit/>     
                </div>
            </div>
        )
    }
}
