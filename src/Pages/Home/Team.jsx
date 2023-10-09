
const Team = () => {
    return (
        <div className="bg-[#dfe36f]">
            <div className="flex justify-around mt-6 pb-4 px-8 py-4 ">
                <h2 className="text-3xl font-semibold w-full">Our Team</h2>
                <p className="text-slate-400">We have a combination in our team with the experience and young energetic blood.We promise quality.Our team works for the perfection</p>

            </div>
            <hr className="  mx-auto text-black " />
            <h2 className="text-2xl font-semibold mt-4 text-center">Meet Our Team</h2>
            <div className="grid gap-4 p-4 grid-cols-4 mt-4 text-center">
                <div className="col-span-1 border-1 shadow-lg bg-white">
                    <img src="https://i.ibb.co/KVwbwWP/Team-memeber-13.png" className="w-32 rounded-full mx-auto my-4" alt="" />
                    <h2 className="text-xl font-semibold">Michel Adams</h2>
                    <h4 className="text-lg font-semibold">Event Manager</h4>
                    <div className=" flex justify-center gap-2 items-center pb-4">
                        <img src="https://i.ibb.co/3zYNNzB/Flag-Switzerland.webp" className="w-8" alt="" />
                        <p>Switzerland</p>
                    </div>
                </div>
                <div className="col-span-1 bg-white shadow-lg rounded-lg">
                    <img src="https://i.ibb.co/0yyL4rx/team-member-01.jpg" className="w-32 rounded-full mx-auto my-4" alt="" />
                    <h2 className="text-xl font-semibold">Jessica Alice</h2>

                    <h4 className="text-lg font-semibold">Event Planner</h4>

                    <div className="flex justify-center gap-2 items-center pb-4">
                        <img src="https://i.ibb.co/64NPn1n/download-2.jpg" className="w-6"alt="" />
                        <p>USA</p>
                    </div>
                </div>
                <div className="col-span-1 bg-white shadow-lg rounded-lg">
                    <img src="https://i.ibb.co/mC5GVFS/Team-memeber-01.png" className="w-32 rounded-full mx-auto my-4" alt="" />
                    <h2 className="text-xl font-semibold">Nathan Astol</h2>

                    <h4 className="text-lg font-semibold">Meeting Planner</h4>

                    <div className="flex justify-center gap-2 items-center pb-4">

                        <img src="https://i.ibb.co/WPbTLw0/download.png" className="w-8" alt="" />
                        <p>Germany</p>
                    </div>
                </div>
                <div className="col-span-1 bg-white shadow-lg rounded-lg">
                    <img src="https://i.ibb.co/7CMvDTx/images.jpg" className="w-32 rounded-full mx-auto my-4" alt="" />
                    <h2 className="text-xl font-semibold">William David</h2>
                    <h4 className="text-lg font-semibold">Event Coordinator</h4>


                    <div className="flex justify-center gap-2 items-center pb-4">

                        <img src="https://i.ibb.co/7rwK7m6/download-1.png" className="w-8" alt="" />
                        <p>Netherland</p>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Team;