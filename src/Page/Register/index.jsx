import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field } from '../../Components/Form'
import { firebaseAuth } from '../../Config/firebase'
import  '../../css/root.css'
export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
     handleOnchange = (e)=>{
        this.setState({ [e.target.name]: e.target.value})
    }
    handleOnsubmit=(e)=>{
        e.preventDefault();
        const {email, password} = this.state;
        firebaseAuth.createUserWithEmailAndPassword(email,password).then(success=>{
            firebaseAuth.currentUser.sendEmailVerification().then(()=>{
                this.props.history.push("/login")              
                alert("chek email anda untuk verifikasi")
            }).catch((error)=>{
                alert(error.message)
            })
        }).catch(error=>{
            alert(error.message)
        })
    }
    
    render() {
        const {email, password} = this.state;

        return (
            <Field img={false} >
                <form action="" onSubmit={this.handleOnsubmit}>
                <div className="container card roboto shadow">
                 <div className="card-title text-center text-uppercase fs-1  pt-3">sign up</div>
                 <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" value={email} name="email" onChange={this.handleOnchange} className="form-control" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 ">
                    <label  className="form-label" required>Password</label>
                    <input type="password" value={password} name="password" onChange={this.handleOnchange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary text-uppercase mb-3">Daftar</button>
                <h6 className="text-samll mt-2">sudah punya akun, <Link to="/login">masuk sini.</Link></h6>
                </div>
                </form>
            </Field>
        )
    }
}
