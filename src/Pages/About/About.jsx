import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const About = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    return (
        <div>
            <div className="bg-[#005d5f] p-6 rounded-sm my-4 w-full">
                <h2 className="text-3xl text-center text-white font-bold">About <span className="text-[#dfe33d]">Event Expert</span></h2>
                <hr className="w-1/2 mx-auto mt-2 font-extra-bold" />
            </div>

            <div className="hero  bg-base-200">
                <div className="hero-content gap-6 flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/HFvwZSD/9175292-6520-1.jpg" className="max-w-lg max-h-[500px] rounded-full shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">What sets us Apart</h1>
                        <ul className="list-disc space-y-4 space-x-4 my-4">
                            <li className="ml-4"><span className="font-semibold">Exceptional Expertise: </span> Our team brings a wealth of experience in event planning, ensuring that every detail is meticulously executed.</li>
                            <li><span className="font-semibold"> Creativity and Innovation:</span> We thrive on creativity and stay at the forefront of industry trends to deliver fresh and innovative event solutions.</li>
                            <li><span className="font-semibold"> Client-Centric Approach:</span> Your satisfaction is our priority. We listen to your needs and collaborate closely to make your vision a reality.</li>
                            <li><span className="font-semibold">Reliability: </span> You can count on us to deliver on time, within budget, and with a smile.</li>
                            <li><span className="font-semibold">Passion:</span> Events are not just our job; they are our passion. We pour our heart and soul into every project.</li>

                        </ul>

                        <div className="flex justify-center">
                            <button className="btn bg-[#005d5f] text-[#dfe33d] ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-gray-300">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/CVG7ch5/1321x881ai-02.webp" className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Our Promise</h1>
                        <p className="py-6">When you choose Event Expert as your event partner, you are choosing a team that is committed to excellence, creativity, and exceptional customer service. We are more than event planners; we are dream weavers who turn your aspirations into extraordinary events.

Let us embark on this exciting journey together. Contact us today to start planning your next remarkable event.</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;