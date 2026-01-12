import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Copy, Check } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Inquiry from ${formState.name}`;
        const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0A${formState.message}`;
        window.location.href = `mailto:littleenginepsychlogy@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('littleenginepsychlogy@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cream-soft rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-light/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-blue-deep">
                        Let's Start the Conversation
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 bg-blue-deep text-white p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl flex flex-col justify-between h-full"
                    >
                        {/* texture */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif mb-6 text-white">Contact Information</h3>
                            <p className="text-white/90 mb-10 leading-relaxed">
                                I am currently accepting new clients. Please use the form or email me directly to discuss how we can work together.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                        <Mail className="text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gold/80 mb-1 uppercase tracking-wider font-bold">Email Me</p>
                                        <div className="flex items-center gap-2">
                                            <a href="mailto:littleenginepsychlogy@gmail.com" className="font-medium hover:text-gold transition-colors break-all text-white">
                                                littleenginepsychlogy@gmail.com
                                            </a>
                                            <button onClick={copyEmail} className="p-1 hover:bg-white/10 rounded text-white/70 hover:text-white transition-colors">
                                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>



                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                        <MapPin className="text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gold/80 mb-1 uppercase tracking-wider font-bold">Availability</p>
                                        <p className="font-medium text-white">Based in Edmonton, AB</p>
                                        <p className="text-sm text-white/70">(In-person & Virtual)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                            <a
                                href="https://littleenginepsych.janeapp.com/#/staff_member/1/bio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-white text-blue-deep font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                            >
                                <Calendar size={20} />
                                Book an Appointment
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-lg border border-gray-100"
                    >
                        <h3 className="text-2xl font-serif text-blue-deep mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-grey uppercase tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-grey uppercase tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-gray-400"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-grey uppercase tracking-wide">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none placeholder:text-gray-400"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn btn-primary flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
