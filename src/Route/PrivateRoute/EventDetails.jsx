import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const [detail,setDetail] = useState({})
    const detailId = useParams();
    const intId = parseInt(detailId.id)
    const allDetails = useLoaderData();
    useEffect(()=>{
        const eventDetails = allDetails.find(event => event.id == intId)
        setDetail(eventDetails)
    },[intId,allDetails])
    console.log(detail)
const {name,image,description,price} = detail;

    return (
        <div className="card  ">
        <figure><img src={image}/></figure>
        <div className="card-body text-center">
          <h2 className=" text-center text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default EventDetails;