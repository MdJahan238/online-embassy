import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/image/google-logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";


const SignUp = () => {
  const { createUser,updateUser} = useContext(AuthContext);
  const navigate =useNavigate();
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //
  const handleSignUp = (data) => {
    console.log(data);
    // ei function diye user create kora hobe
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      //console.log(user);
      //alert("Create User Successfully"); anoter alert in down
      const userInfos = {
        displayName:data.name,
      }
      //user create korar por data save&update kora hobe
      updateUser(userInfos).then(()=>{
        saveUser(data.name,data.email);
      })
      .catch((error)=>console.log(error));
    })
    .catch((error)=>{
      console.log(error);
      toast.error('User SignUp Failed!');
    })
  };

//eikhane api diye database e data post korbe
  const saveUser =(name,email)=>{
    const user ={
      name,
      email,
    };
    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data);
      if(data.acknowledged==true){
        //alert("User Created Successfully Done"); toast use as alternate alert
        toast.success('User Successfully created!');
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            {/* ============= Start Form Section ================== */}
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                {/* ============= Name Section ================== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: "Name is Required" })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message} </p>
                )}
              </div>
        {/* ============= Email Section ================== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is Required",
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message} </p>
                )}
              </div>
            {/* =================== Password Section ================== */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be six characters long",
                    },
                    pattern: {
                      value: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/,
                      message:
                        "Passowrd must be one uppercase, a digit and a special character",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message} </p>
                )}

                <label className="label">
                  <Link
                    to="/login"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Already have an account? login now
                  </Link>
                </label>
              </div>
            {/* ============= button Section ================== */}
              <div className="form-control mt-2 ">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn bg-orange-500"
                />
              </div>
              <div className="form-control mt-2 ">
                <button className="btn bg-orange-500">
                  <img className="w-12 h-12" src={google} alt="" /> Sign Up with
                  Google
                </button>
              </div>
            </form>
             {/* ============= Form Section  End ================== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
