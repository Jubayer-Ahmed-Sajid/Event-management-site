
import { useEffect, useState } from "react";
import Event from "./event";


const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-2xl my-6">Services</h2>
            <div className="grid grid-cols-2 gap-4">
                {
                    events.map(event => <Event event={event} key={event.id}></Event>)
                }
            </div>


        </div >
    );
};

export default Events;