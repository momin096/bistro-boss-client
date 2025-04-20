
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-20 container mx-auto">
                {/* Contact Us */}
                <div className="text-center ">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold mb-2">CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

                {/* Follow Us */}
                <div className="text-center ">
                    <h2 className="text-lg font-semibold mb-2">Follow US</h2>
                    <p className="mb-2">Join us on social media</p>
                    <div className="flex justify-center  gap-4 text-2xl">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center py-4 bg-neutral text-neutral-content">
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

