import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <h2 className="text-2xl">
                        <FaFacebook></FaFacebook>
                    </h2>
                    <h2 className="text-2xl">
                    <FaTwitter></FaTwitter>
                    </h2>
                    <h2 className="text-2xl">
                        <FaYoutube></FaYoutube>
                    </h2>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;