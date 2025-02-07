import React, { useContext } from 'react';
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/image/google-logo.png'
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const Login = () => {
  const {signIn}=useContext(AuthContext);
  
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


  const location = useLocation();
  const nevigate = useNavigate();
  const from = location.state?.from?.pathname||"/";

  const handleLogin =(data) =>{
      signIn(data.email,data.password)
      .then(result=>{
        const user = result.user;
        console.log(user);
        toast.success('Login Successfully created!');
        nevigate(from,{replace:true});
      })
      .catch(error=>{
        toast.error('Login failed!');
        console.log(error);
      })
  };

    return (
  <div className="hero min-h-screen">
    <div className="hero-content flex-col">
      <div className="text-center ">
        <h1 className="text-2xl font-bold">Login now!</h1>
      </div>
        <div className="card bg-base-100 shadow-2xl">
          {/* ============= Start Form Section ================== */}
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            {/* ============= Email ================== */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email",{
              required:"Email is Required",
              })} type="email" 
                placeholder="email" 
                className="input input-bordered" 
                required />
              {errors.email && (<p className='text-red-500'>{errors.email.message} </p>)}
            </div>
          {/* ============= Password ================== */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password",{required:"Password is Required",
                minLength:{
                value:6,
                message:"Password must be six characters long",
                },
                pattern:{value:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,message:"Passowrd must be one uppercase, a digit and a special character"}
                })} type="password" placeholder="password" className="input input-bordered" required autoComplete="current-password" />
                {errors.password && (<p className='text-red-500'>{errors.password.message} </p>)}
              <label className="label">
                <Link to="/sign-up" href="#" className="label-text-alt link link-hover">
                  New to website? Please create an account
                </Link>
              </label>
            </div>
           {/* ============= Button ================== */}
            <div className="form-control mt-2 ">
              <button className='btn bg-orange-600'> Login</button>
            </div>
            <div className="form-control mt-2 ">
              <button className='btn bg-orange-500'> 
              <img className='w-12 h-12' src={google} alt="" /> Continue with Google</button>
            </div>
          </form>
          {/* ============= End Form Section ================== */}
     </div>
    </div>
  </div>
    );
};

export default Login;