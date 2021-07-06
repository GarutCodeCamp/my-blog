import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field } from '../../Components/Form'
import { firebaseAuth, googleAuth } from '../../Config/firebase'
import  '../../css/root.css'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password:'',
            alert: true,
        }
    }
    handleonSubmit=(e)=>{
        e.preventDefault()
        const {email,password} = this.state
        firebaseAuth.signInWithEmailAndPassword(email,password)
        .then(res=>{
            if(res.user.emailVerified){
                alert("Login Success")
                this.props.history.push("/")
            }else{
                alert("Email Belum Di Verifikasi")
            }
        }).catch(()=>{
            this.alert();
        })
    }
    handleOnChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    alert=()=>{
        this.setState({
            alert: 
            <div className="alert alert-danger" role="alert">
                Email Atau Password Salah, Atau Mungkin Akun Yang Anda Maksud  Belum Terdaftar.
            </div>
        })

    }
    handleOnclick=()=>{
        firebaseAuth.signInWithPopup(googleAuth).then(()=>{
            this.props.history.push('/')

        }).catch((err)=>{
            alert(err.message)
        })
    }
    render() {
        const {email, password,alert} = this.state
        return (
            <Field img={true}>
                <form  onSubmit={this.handleonSubmit}>
                    <div className="container card roboto shadow">
                        <div className="card-title text-center text-uppercase fs-1  pt-3">sign in</div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input  className="form-control" value={email||''} name="email" onChange={this.handleOnChange} type="email" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 ">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control"  value={password} name="password" onChange={this.handleOnChange} required/>
                        </div>
                        {alert}
                        <button type="submit" className="btn btn-primary text-uppercase mb-3">Masuk</button>
                        <button onClick={this.handleOnclick} className="btn btn-outline-danger text-uppercase">gunakan akun <i className="bi-google"></i></button>
                        <h6 className="text-samll mt-2">saya tidak punya akun, <Link to="/register">buat akun.</Link></h6>
                        <h6 className="text-samll mt-2">Lupa<Link to="/forgot-pasword">Password</Link></h6>

                    </div>
                </form>                
            </Field>
        )
    }
}
