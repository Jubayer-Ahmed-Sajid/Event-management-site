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
const {name,image,description,price,detailDescription} = detail;

    return (
        <div className="card  ">
        <figure><img src={image}/></figure>
        <div className="card-body text-center p-4">
          <h2 className=" text-center text-2xl font-bold">{name}</h2>
          <p className="my-2 text-xl font-semibold">{description}</p>
          <p className="mb-2">{detailDescription}</p>
          <p className="mb-2 font-bold">{price}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-primary text-secondary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default EventDetails;