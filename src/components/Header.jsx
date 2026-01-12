import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Approach', href: '#approach' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md h-20 shadow-sm' : 'bg-transparent h-24'
                }`}
        >

            <div className="container mx-auto px-6 h-full flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex-shrink-0">
                    <img src={logo} alt="Little Engine Psychology" className="h-20 w-auto transition-all duration-300" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 bg-white/50 px-8 py-3 rounded-full border border-white/20 shadow-sm backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-grey font-medium hover:text-blue-deep transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <a href="https://littleenginepsych.janeapp.com/#/staff_member/1/bio" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn btn-primary px-6 py-2.5 text-sm">
                        Book Appointment
                    </a>

                    <button
                        className="md:hidden text-dark"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t border-gray-100 animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-dark py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#" className="btn btn-primary w-full mt-4 justify-center">
                        Book Appointment
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
