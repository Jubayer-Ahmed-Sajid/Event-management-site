import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Event = ({ event }) => {
    const { id, name, image, price, description } = event;
    return (
        <div className="card h-[500px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} className="w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/event/${id}`}>
                    
                     <button className="btn btn-primary">See Details</button>
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