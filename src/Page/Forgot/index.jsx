import React, { Component } from "react"
import { firebaseAuth } from "../../Config/firebase";
import "../../css/root.css"


class Forgot extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
        }
       
    }
    handleOnSubmit=(e)=>{
        firebaseAuth.sendPasswordResetEmail(this.state.email).then(()=>{
            alert("periksa Email anda")
            this.props.history.push("/login")
        }).catch(()=>{
            alert("Email Tidak terdaftar")
        })
        e.preventDefault();
    }
    handleOnchange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div className="bg-forgot size-default d-flex justify-content-center">
                <div className="card m-auto shadow  text-center col-lg-4 col-md-6 col-sm-8 col-10">
                    <form className="container  mt-4 mb-2" onSubmit={this.handleOnSubmit}>
                        <div className="fs-2 roboto text-uppercase">Password</div>
                        <div className="mb-3 mt-2 ">
                            <label htmlFor="" className="label-input">Email</label>
                            <input type="email" name="email" value={this.state.email} onChange={this.handleOnchange} className="form-control mt-2"  placeholder="masukan Email anda" required/>
                            <button type="submit" className="btn btn-success mt-2  text-uppercase text-bold">Kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}




export default Forgot