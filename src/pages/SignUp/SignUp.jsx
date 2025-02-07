import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/image/google-logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";


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
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      alert("Create User Successfully");
      const userInfos = {
        displayName:data.name,
      }
      updateUser(userInfos).then(()=>{
        navigate("/");
      })
      .catch((error)=>console.log(error));
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
