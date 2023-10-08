import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
import PropTypes from 'prop-types'


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children
    }
    return <Link to = { '/login'} ><Login></Login></Link>

    
};
PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;