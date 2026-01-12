import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Approach = () => {
    return (
        <section id="approach" className="py-32 relative overflow-hidden bg-[#FDFBF7]">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-light/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Sparkles className="w-12 h-12 text-gold mx-auto mb-10 opacity-80" />

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-blue-deep leading-tight mb-12">
                            "My goal is to collaborate with you on your <span className="italic text-gold">healing journey</span>,
                            creating a space where <br className="hidden lg:block" />
                            <span className="relative inline-block px-2">
                                <span className="relative z-10 font-medium">authenticity</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-gold/20 -z-0 -rotate-1 rounded-full"></span>
                            </span>,
                            <span className="relative inline-block px-2">
                                <span className="relative z-10 font-medium">empathy</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-sky/20 -z-0 rotate-1 rounded-full"></span>
                            </span>, and
                            <span className="relative inline-block px-2">
                                <span className="relative z-10 font-medium">humour</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-cream-soft -z-0 -rotate-2 rounded-full"></span>
                            </span>
                            can guide us."
                        </h2>

                        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-12"></div>

                        <p className="text-xl md:text-2xl text-grey font-light max-w-3xl mx-auto leading-relaxed">
                            I hope to empower individuals to live more meaningful lives by fostering curiosity that helps them discover their own insights and strengths.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
