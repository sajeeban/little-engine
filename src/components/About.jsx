import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import headshot from '../assets/sahana_headshot.jpg';
import lifestyle from '../assets/lifestyle.png';
import { Star, Sparkles } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section id="about" ref={containerRef} className="relative overflow-hidden bg-white">

            {/* Background Texture - Organic Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream-soft rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply animate-blob" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-light/20 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />

            {/* Main Content Area */}
            <div className="container mx-auto px-6 py-24 md:py-32">

                {/* Header */}
                <div className="text-center mb-20 md:mb-28 relative">
                    <FadeIn>
                        <div className="inline-block relative">
                            <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block relative z-10">
                                About Me
                            </span>
                            <div className="absolute -bottom-2 left-0 w-full h-3 bg-cream/80 -z-0 skew-x-12" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-blue-deep leading-tight relative z-10">
                            Hello! I am so glad <br /> <span className="text-gold italic">you are here.</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start relative">

                    {/* Connecting Line (Mobile Hidden) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block transform -translate-x-1/2" />

                    {/* Left Column: Image with Parallax */}
                    <motion.div style={{ y }} className="relative max-w-sm mx-auto md:ml-auto md:mr-0 z-10">
                        <motion.div style={{ rotate }} className="relative">
                            <div className="absolute inset-0 bg-gold/20 rounded-[2rem] transform rotate-6 scale-105 transition-transform duration-700 hover:rotate-2" />
                            <img
                                src={headshot}
                                alt="Sahana - Registered Provisional Psychologist"
                                className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-[3/4]"
                            />
                            {/* Visual Cue: Floating Badge */}
                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[220px]"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Star className="text-gold mb-2" size={24} fill="#DDAF61" />
                                <p className="font-serif text-blue-deep text-lg leading-tight">
                                    "Healing at your own pace."
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Narrative with Timeline Visuals */}
                    <div className="space-y-12 text-lg text-grey leading-relaxed md:pt-12 relative z-10">
                        <FadeIn delay={0.2}>
                            <div className="relative pl-8 border-l-2 border-cream-soft">
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold ring-4 ring-white" />
                                <h3 className="text-3xl font-serif text-blue-deep mb-4">
                                    My name is Sahana.
                                </h3>
                                <p className="text-base uppercase tracking-wider text-gold mb-4 font-bold text-xs">Registered Provisional Psychologist (She/Her)</p>
                                <p>
                                    My passion lies in advocating for anti-oppressive practices within diverse communities.
                                    Over the last decade, I’ve gained valuable experience working in academic, legal, and medical settings.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="relative pl-8 border-l-2 border-cream-soft">
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-light ring-4 ring-white" />
                                <p>
                                    This has deepened my commitment to helping individuals heal through a culturally informed perspective.
                                    I work with <strong className="text-blue-deep">children (3+), teens, parents, and adults</strong> facing the impacts of trauma.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </div>

            {/* Section 3: The Philosophy */}
            <div className="py-32 bg-cream-soft/50 relative">
                {/* Decorative Icons */}
                <Sparkles className="absolute top-10 left-10 text-gold/20" size={64} />
                <Sparkles className="absolute bottom-10 right-10 text-gold/20" size={48} />

                <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
                    <FadeIn>
                        <h3 className="text-4xl font-serif text-blue-deep mb-8">The Core of My Practice</h3>
                        <p className="text-xl text-grey leading-relaxed mb-10">
                            "I strive to support caregivers and greater systems in learning about, managing, and growing from stressful circumstances.
                            My approach is rooted in valuing relationships and connection through an <strong className="text-gold">attachment-based lens</strong>."
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Play Therapy', 'Internal Family Systems', 'Narrative', 'Somatic', 'EMDR'].map((item) => (
                                <span key={item} className="px-4 py-2 rounded-full border border-blue-deep/10 text-sm text-blue-deep bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Section 4: Personal Side */}
            <div className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-12 items-center bg-blue-deep/5 rounded-3xl p-8 md:p-12">
                        <div className="md:col-span-7 space-y-6 text-lg text-grey">
                            <FadeIn>
                                <h3 className="text-3xl font-serif text-blue-deep mb-6 flex items-center gap-3">
                                    <span className="text-4xl">🍦</span> Outside the Office
                                </h3>
                                <p>
                                    You’ll usually find me trying new local restaurants, enjoying time with family, or planning my next travel adventure.
                                </p>
                                <p>
                                    I firmly believe that a scoop of <span className="text-gold font-medium">mint chocolate chip ice cream</span> and a mountain getaway can heal just about anything.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="md:col-span-5 flex justify-center">
                            <FadeIn delay={0.2}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gold/20 rounded-3xl rotate-6 transform scale-95" />
                                    <img
                                        src={lifestyle}
                                        alt="Sahana's Hobbies"
                                        className="relative rounded-3xl shadow-lg rotate-0 hover:rotate-2 transition-transform duration-500 max-w-xs w-full"
                                    />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
