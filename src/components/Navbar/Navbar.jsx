import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import club from "../../assets/club.png";
import aud from "../../assets/thaithai.mp3";

const Navbar = () => {
    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const audioRef = useRef(null);

    const scrollThreshold = 50; // Only trigger after scrolling 50px
    let lastScrollTop = 0; // To track the last scroll position
    const minTranslateY = 5; // Slight buffer to hide the navbar fully

    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        // Set initial navbar height
        updateNavbarHeight();
        
        // Update navbar height on window resize
        window.addEventListener('resize', updateNavbarHeight);
        
        return () => {
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, []);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Check if the scroll has moved more than the threshold
            if (Math.abs(currentScrollY - lastScrollTop) > scrollThreshold) {
                if (currentScrollY > lastScrollTop) {
                    // Scrolling down
                    setTranslateY(-navbarHeight - minTranslateY); // Hide navbar completely
                } else {
                    // Scrolling up
                    setTranslateY(0); // Show navbar
                }

                // Update the last scroll position
                lastScrollTop = currentScrollY;
            }
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [navbarHeight]);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            audioRef.current.play();
        }
    };

    return (
        <div
            ref={navbarRef}
            style={{
                position: "fixed",
                top: 0,
                transform: `translateY(${translateY}px)`, // Hide or show based on scroll direction
                transition: "transform 0.3s ease-in-out", // Smooth transition for navbar movement
            }}
            className="navbar w-full flex flex-row justify-between px-4 py-3 md:py-6 lg:py-3 bg-orange-500 shadow-md z-50"
        >
            <div className="nav-left flex flex-row justify-center items-center gap-5">
                <a href="https://srmsigkdd.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Icon" className="icon w-12 h-12 md:w-12 md:h-12 lg:w-12 lg:h-12 button-cursor" />
                </a>
                <a href="https://srmsigkdd.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img src={club} alt="Icon" className="w-34 h-10 button-cursor" />
                </a>
            </div>
            <div className="nav-right flex items-start">
                <a
                    href="https://hackofduty.devfolio.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: "Hitmarker",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    <button
                        onClick={playSound}
                        style={{
                            cursor: `url(${require("../../assets/buttoncursor.png")}), auto`,
                            padding: "8px 16px",
                            backgroundColor: "rgba(51, 51, 51, 0.8)",
                            border: "2px solid #ff7200",
                            borderRadius: "10px",
                            color: "#ff7200",
                            fontSize: "14px",
                            letterSpacing: "2px",
                            transition: "background-color 0.3s, box-shadow 0.3s",
                            boxShadow: "0 0 15px 3px rgba(255, 204, 0, 0.7)",
                            position: "relative",
                            overflow: "hidden",
                            marginLeft: window.innerWidth <= 640 ? "25px" : "0px",
                            marginTop: "4px",
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "rgba(34, 34, 34, 0.9)";
                            e.target.style.boxShadow = "0 0 20px 6px rgba(255, 204, 0, 0.9)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "rgba(51, 51, 51, 0.8)";
                            e.target.style.boxShadow = "0 0 15px 3px rgba(255, 204, 0, 0.7)";
                        }}
                    >
                        Register Now
                        <audio ref={audioRef} src={aud} />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;