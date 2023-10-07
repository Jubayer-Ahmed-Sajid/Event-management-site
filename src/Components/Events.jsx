import { useEffect, useState } from "react";


const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
        console.log(events.length)
    }, [events])
    return (
        <div>
            <h2 className="text-center text-2xl my-6">Services:{events.length}</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    events.map(event => <>
                    <div className="card h-[300px]  bg-base-100 shadow-sm image-full">
                            <figure className="w-[300px"><img src={event.image}  className="w-full"alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title ">{event.name}</h2>
                                <p>{event.description}</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        
                    
                    </>)
                }

        </div>


        </div >
    );
};

export default Events;