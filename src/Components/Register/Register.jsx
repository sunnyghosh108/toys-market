import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photoUrl=form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password,photoUrl)
       // signIn(email, password)
            .then(result => {
                const user = result.user;
                
                console.log(user);
                //navigate(from,{replace:true})
               // console.log(user);
               // navigate(from,{replace:true})
               

            })
            .catch(error => console.log(error));
    }




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <img   src='https://i.ibb.co/S3xS80n/placeholder-concept-illustration-114360-4847.jpg' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">register!!</h1>
                    <form onSubmit={handleRegister}>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoUrl</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="PhotoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to website <Link className='text-orange-600 font-bold' to="/login">login</Link> </p>
                   <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;