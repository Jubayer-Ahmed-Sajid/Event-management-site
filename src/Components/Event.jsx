import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Event = ({ event }) => {
    const { id, name, image, price, description } = event;
    return (
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
    );
};
Event.propTypes ={
    event: PropTypes.object
}

export default Event;