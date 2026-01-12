import logo from '../assets/logo.png';
import { Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-cream-soft pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <img src={logo} alt="Little Engine Psychology" className="h-24 w-auto mb-6 opacity-90" />
                        <p className="text-grey max-w-sm mb-6">
                            Helping children, teens, and adults navigate life’s challenges with strength and resilience.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-deep hover:bg-gold hover:text-white transition-colors shadow-sm">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-blue-deep font-serif text-xl mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Approach', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-grey hover:text-gold transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-blue-deep font-serif text-xl mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-grey">
                                <MapPin size={20} className="text-gold mt-1" />
                                <span>Based in Canada<br />By Appointment Only</span>
                            </li>
                            <li className="flex items-center gap-3 text-grey">
                                <Mail size={20} className="text-gold" />
                                <a href="mailto:littleenginepsychlogy@gmail.com" className="hover:text-gold">littleenginepsychlogy@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-deep/10 pt-8 text-center text-grey text-sm">
                    <p>&copy; {new Date().getFullYear()} Little Engine Psychology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
