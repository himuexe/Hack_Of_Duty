import React, { useEffect, useRef, useState } from 'react';

const Web3Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false); // Track if trigger section has been activated
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsOpen(true);
                    setHasTriggered(true); // Mark that the trigger section has activated
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    const handleBonusTrackClick = () => {
        setIsOpen(true); // Reopen the dialog when button is clicked
    };

    return (
        <>
            {/* Invisible trigger section, only if it hasn't been triggered */}
            {!hasTriggered && <div ref={sectionRef} className="h-screen w-full"></div>}

            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                >
                    <div className="w-4/5 lg:w-3/5 h-[70vh] relative overflow-hidden 
                        border-2 border-orange-500 rounded-lg 
                        bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
                        shadow-lg shadow-orange-500/20
                        backdrop-blur-sm
                        p-8 
                        animate-pulse-slow
                        animate-in
                        fade-in
                        duration-300
                        hover:scale-[1.02]
                        transition-transform"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 
                            bg-orange-500/10 rounded-full blur-3xl
                            animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 
                            bg-orange-400/10 rounded-full blur-3xl
                            animate-pulse"></div>
                            
                        {/* Content container */}
                        <div className="relative h-full flex flex-col justify-center gap-6 z-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent 
                                bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500
                                tracking-tight leading-tight 
                                drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                                Bonus Mission:<br></br>
                                Blockchain & Web3
                            </h1>
                            
                            <p className="text-gray-300/90 text-lg md:text-xl 
                                leading-relaxed max-w-3xl
                                drop-shadow-lg">
                                Gear up for the Blockchain & Web3 battlefield! 
                                Secure smart contracts or build decentralized 
                                worlds—this track puts you in control of the future 
                                internet. Power up your dApps, earn DeFi killstreaks, 
                                and unlock the next level of ownership with NFTs. Sponsored by 
                                <b className="text-yellow-400 font-semibold "> Quill AI</b>, 
                                with $50 prizes and goodies for top teams—victory is one deployment away!
                            </p>
                        </div>

                        {/* Close button */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white
                                w-10 h-10 flex items-center justify-center
                                rounded-full hover:bg-white/10
                                transition-colors z-20"
                        >
                            ✕
                        </button>

                        {/* Subtle grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    </div>
                </div>
            )}

            {/* Show the 'View Bonus Track' button when the dialog is closed */}
            {!isOpen && hasTriggered && (
                <div className="my-8 flex justify-center">
                    <button 
                        onClick={handleBonusTrackClick}
                        className="bg-orange-500 bg-opacity-70 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-all border-2 border-orange-500 hover:border-orange-600 glow-orange"
                    >
                        View Bonus Track
                    </button>
                </div>
            )}
        </>
    );
};

export default Web3Hero;
