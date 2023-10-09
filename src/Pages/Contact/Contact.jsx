
const Contact = () => {
    return (
        <div>
            <div className="bg-primary pt-8">
                <h2 className="text-3xl text-center mt-12 font-semibold text-white">Contact Us</h2>
                <h4 className="text-xl font-medium text-center mt-2 text-white">eventexpert@gmail.com</h4>
                <div className="flex justify-around items-center mt-6" >
                    <h2 className="text-3xl text-center font-semibold text-white mt-6 px-6">Working Hours</h2>
                    <ul className="text-xl text-white">
                        <li>Monday: 11am-6pm</li>
                        <li>Tuesday: 11am-6pm</li>
                        <li>Thursday: 11am-6pm</li>
                    </ul>
                </div>
                <img src="https://i.ibb.co/Swc04Dk/meeting-594091.jpg" className="w-full mt-4" alt="" />
                <div>
                    <h2 className="text-3xl text-center font-semibold text-white mt-8 mb-4 ">Submit Proposal</h2>
                    <p className="text-white px-4 pb-4">Are you ready to turn your event dreams into a reality? Look no further! Our expert team is here to meet all your event planning and management needs. From start to finish, we will handle every detail, ensuring a seamless and unforgettable experience for you and your guests. Submit your proposal today and let us start crafting an event that will leave everyone inspired and amazed!

                    </p>
                </div>
                
            </div>

        </div>
    );
};

export default Contact;