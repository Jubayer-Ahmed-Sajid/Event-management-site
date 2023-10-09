import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)
    const { userLogin,createWithUserGoogle } = useContext(AuthContext)
    const handleGoogleSignIn =()=>{
    createWithUserGoogle()
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 2500
            })
            navigate(location?.state ? location.state : '/');


        })
        .catch((error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 2500
            })
        })
}
const handleSignIn = e => {
    e.preventDefault()
    const info = new FormData(e.currentTarget);
    const email = info.get('email')
    const password = info.get('password')
    // const password = e.target.password.value;
    userLogin(email, password)
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully logged in',
                showConfirmButton: false,
                timer: 2500
            })
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error)
            return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.message,
                showConfirmButton: false,
                timer: 2500
            })
        })
}
return (
    <div className="hero pt-24 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <Link to='/register' className="my-3">
                            <p className="text-blue-700 hover:underline">New to the Site? Register</p>

                        </Link>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primary text-secondary ">Login</button>

                    </div>
                    <hr className="border-black font-bold my-4  w-full" />
                    <div className="text-center flex justify-center">
                        <h2 className="text-xl">
                            <button onClick={handleGoogleSignIn}>
                                <FaGoogle></FaGoogle>

                            </button>

                        </h2>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default Login;