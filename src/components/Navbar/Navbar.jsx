import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import club from "../../assets/club.png";

const Navbar = () => {
    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        let prevScrollY = window.scrollY;
        let accumulatedDiff = 0;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            const scrollDiff = prevScrollY - currentScrollY; // Positive when scrolling up
            
            accumulatedDiff = Math.min(
                Math.max(accumulatedDiff + scrollDiff, -navbarHeight),
                0
            );

            setTranslateY(accumulatedDiff);
            prevScrollY = currentScrollY;
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [navbarHeight]);

    return (
        <div 
            ref={navbarRef}
            style={{
                position: 'fixed',
                top: 0,
                transform: `translateY(${translateY}px)`,
                transition: 'none'
            }}
            className="navbar w-full flex flex-row justify-between px-4 py-3 md:py-6 lg:py-3 bg-orange-500 shadow-md z-50"
        >
            <div className="nav-left flex flex-row justify-center items-center gap-5">
                <img src={logo} alt="Icon" className='icon w-12 h-12 md:w-12 md:h-12 lg:w-15 lg:h-15' />
                <img src={club} alt="Icon" className=' w-32 h-16 ' />
                
            </div>
            <div className="nav-right flex items-start">
                <button className="btn text-white text-2xl md:text-2xl lg:text-2xl">Register</button>
            </div>
        </div>
    );
};

export default Navbar;