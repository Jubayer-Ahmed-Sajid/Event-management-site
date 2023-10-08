import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase.config";

const Register = () => {
    const navigate = useNavigate('')
    const { createWithUserGoogle, createUser } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        createWithUserGoogle()
            .then((result) => {
               
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        console.log(name, email, password, url)
        createUser(email, password, url, name)
            .then(() => {
                const user = auth.currentUser;
                updateProfile(user,{
                displayName:name,
                photoURL:url
              })
                    .then(() => {
                        return user.reload();
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                navigate('/')


            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegistration}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <Link to='/login' className="my-3">
                                <p className="text-blue-700 hover:underline">ALready Have an Account? Login</p>

                            </Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <hr className="border-black font-bold my-4  w-full" />
                    <div className="text-center flex justify-center py-4">
                        <button className="text-xl" onClick={handleGoogleSignIn}>
                            <FaGoogle></FaGoogle>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;