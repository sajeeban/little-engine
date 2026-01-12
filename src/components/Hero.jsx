import { motion } from 'framer-motion';

const Hero = () => {
    const titleWords = ["Navigating", "Life’s", "Hills,", "Together."];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    return (
        <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 overflow-hidden flex items-center justify-center text-center">
            {/* Background Gradients & Blobs */}
            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-cream-soft via-transparent to-transparent -z-20" />
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-light/20 rounded-full blur-3xl -z-10 animate-blob" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-block text-gold font-bold tracking-[0.2em] uppercase text-sm mb-6"
                    >
                        Registered Provisional Psychologist
                    </motion.span>

                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-blue-deep mb-8 leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2"
                    >
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={child}
                                className={index === titleWords.length - 1 ? "text-gold italic" : ""}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p className="text-xl text-grey mb-10 max-w-2xl mx-auto leading-relaxed">
                            A safe, anti-oppressive space to find your strength and heal at your own pace.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                            <a href="https://littleenginepsych.janeapp.com/#/staff_member/1/bio" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto text-lg px-10 py-4 shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 transform hover:-translate-y-1 transition-all duration-300">
                                Book an Appointment
                            </a>
                            <a href="#about" className="text-grey hover:text-blue-deep transition-colors font-medium relative group">
                                Meet Sahana →
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-deep transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
