import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase.config";
import Swal from 'sweetalert2'


const Register = () => {
    const navigate = useNavigate('');
    const [errors, setError] = useState('');
    const [successMessage, setSuccess] = useState('');
    const { createWithUserGoogle, createUser } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        
        createWithUserGoogle()
            .then(() => {
                setSuccess('User created successfully')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: successMessage,
                    showConfirmButton: false,
                    timer: 2500
                })

            })
            .catch((error) => {
                setError(error.message)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: errors,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }
    const handleRegistration = async e => {
        setError('');
        setSuccess('');
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        if (password.length < 6) {
              return  Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Password must be atleast six character long',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }
        if (!/[A-Z]/.test(password)) {
               return Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title:"Password must contain at least one capital letter.",
                    showConfirmButton: false,
                    timer: 1500
                  })
            
        }
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
               return Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Password must contain at least one special character.",
                    showConfirmButton: false,
                    timer: 1500
                  })
        }
    
    

    console.log(name, email, password, url)
    createUser(email, password, url, name)
        .then(() => {
            const user = auth.currentUser;
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
                .then(() => {

                })
                .catch((error) => {
                    console.error(error)
                })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully account created',
                showConfirmButton: false,
                timer: 1500
            })
            ;
            setTimeout(() => {
                window.location.reload();
            }, 2000);
           
            navigate('/');
            



        })
        .catch((error) => {
            setError(error.message)
           return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: errors,
                showConfirmButton: false,
                timer: 1500
            })
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
                        <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url"  name="url" placeholder="Photo URL" className="input input-bordered" required />
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
                            <p className="text-blue-700 hover:underline">ALready Have an Account? SignIn</p>

                        </Link>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primary text-secondary">Sign Up</button>
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