import { motion } from 'framer-motion';
import { Heart, Sun, CloudSun, Brain, Sparkles, Users } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Child & Play Therapy",
            desc: "A safe space for children (3+) to express themselves through play. We address anxiety, emotional regulation, and behavioral challenges.",
            icon: <CloudSun size={32} />,
            delay: 0
        },
        {
            title: "Teen & Adult Therapy",
            desc: "Navigating life transitions, stress, and identity. We work together to build resilience and find balance in a busy world.",
            icon: <Sun size={32} />,
            delay: 0.1
        },
        {
            title: "Parent Consulting",
            desc: "Attachment-based support for caregivers. Learn practical strategies to strengthen your family connection and manage stressful circumstances.",
            icon: <Users size={32} />,
            delay: 0.2
        },
        {
            title: "Trauma & EMDR",
            desc: "Evidence-based trauma processing using Eye Movement Desensitization and Reprocessing (EMDR) to help heal from past experiences.",
            icon: <Brain size={32} />,
            delay: 0.3
        },
        {
            title: "Internal Family Systems",
            desc: "Exploring the different 'parts' of yourself to achieve inner harmony and self-leadership.",
            icon: <Sparkles size={32} />,
            delay: 0.4
        },
        {
            title: "Somatic Approaches",
            desc: "Reconnecting with the body to release tension and trauma, promoting holistic healing.",
            icon: <Heart size={32} />,
            delay: 0.5
        }
    ];

    return (
        <section id="services" className="py-24 bg-cream-soft/30 relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-gold font-bold uppercase tracking-widest text-sm">Services</span>
                    <h2 className="text-4xl font-serif text-blue-deep mt-4">Support Tailored to You</h2>
                    <p className="text-grey mt-4">
                        Integrating evidence-based modalities to support your unique healing journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-transparent hover:border-gold/30 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-light/30 rounded-2xl flex items-center justify-center text-blue-deep mb-6 group-hover:scale-110 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-serif text-blue-deep mb-3">{service.title}</h3>
                            <p className="text-grey text-sm leading-relaxed mb-6">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://littleenginepsych.janeapp.com/#/staff_member/1/bio" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Rates & Book Online
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
