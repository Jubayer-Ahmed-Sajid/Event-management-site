import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QQtrvmF/dylan-gillis-Kdeq-A3a-Tn-BY-unsplash-min.jpg)' }}>
            <div className="hero-overlay bg-opacity-0.7"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl shadow-sm text-white font-bold">Your Vision, <span className="text-secondary">
                    Our Expertise  </span> </h1>
                    <p className="mb-5">we understand that each corporate event is a canvas waiting to be painted with your unique vision.We are dedicated to transforming your ideas into extraordinary, flawlessly executed corporate experiences</p>
                    <Link to='/login'>
                    <button className="btn bg-primary text-secondary">Get Started</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;