import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Event = ({ event }) => {
    useEffect(()=>{
        AOS.init();
    },[])
    const { id, name, image, price, description } = event;
    return (
        <div data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

        <div className="card h-[500px] shadow-xl">
            <figure className=" pt-10">
                <img src={image} className="w-full" />
            </figure>
            <div className="card-body items-center text-center text-slate-400">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/event/${id}`}>
                    
                     <button className="btn bg-primary text-white  ">See Details</button>
                </Link>
            </div>
        </div>
        </div >
        </div>
    );
};
Event.propTypes ={
    event: PropTypes.object
}

export default Event;