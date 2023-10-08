import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase.config";


const NavBar = () => {
    const { user, logOut,loading } = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }
    const handleLogout = () => {
        logOut(auth)
            .then(() => {
                console.log("successfully logged out")
            })
            .catch(error => {
                console.error(error)
            })
    }
    console.log(user)
    const navLink = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
            <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About Us</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div>
                    <img src="https://i.ibb.co/VjpTYYY/5e3m-Fk-Logo-Makr.png" alt="" />
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end items-center">

                {
                    user ?
                        <div className="flex items-center">
                            <h2>{user.displayName}</h2>

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <button onClick={handleLogout} className="btn btn-primary">LogOut</button>
                        </div> :
                        <div className="flex gap-6 items-center">
                            <label className=" h-16 rounded-full avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/Xpv6C0Z/1000-F-332596535-l-Ad-Lhf6-Kzb-W6-PWXBWe-IFTov-Tii1drkb-T.jpg" />
                                </div>
                            </label>
                            <Link to="/login">
                                <button className="btn btn-primary">Login</button>
                            </Link>
                        </div>

                }
            </div>


        </div>
    );
};

export default NavBar;