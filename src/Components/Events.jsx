
import { useEffect, useState } from "react";
import Event from "./event";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Events = () => {
    useEffect(() => {
        AOS.init();
    })
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h2 className="text-center text-2xl my-6">Our Services</h2>
                <hr className="w-1/3 border-black borer-2 mx-auto mb-4 font-extra-bold" />
</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        events.map(event => <Event event={event} key={event.id}></Event>)
                    }
                </div>


            </div >
            );
};

            export default Events;