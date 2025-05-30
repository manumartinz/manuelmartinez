import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import '../styles/navbar.css';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {

    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '#hero',
            start: 'bottom top',
            onEnter: () => navRef.current?.classList.add('navbar-scrolled'),
            onLeaveBack: () => navRef.current?.classList.remove('navbar-scrolled'),
        });
    }, []);

    const [copy, setCopy] = useState('manumartinzx@gmail.com');

    const clickedMail = () => {
        setCopy('¡Copiado!');
        setTimeout(() => {
            setCopy('manumartinzx@gmail.com');
        }, 2000);
    }

    return (
        <>
            <nav ref={navRef} className='navbar w-full h-20 fixed top-0 left-0 flex justify-center lg:justify-between items-center gap-5 z-50 pt-10 px-32'>
                <svg width="55" height="55" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_231_648)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M100 33.6449C92.7738 33.6449 86.9159 39.5028 86.9159 46.729H53.271C53.271 20.9213 74.1923 0 100 0C125.808 0 146.729 20.9213 146.729 46.729C146.729 72.5367 125.808 93.4579 100 93.4579V59.8131C107.226 59.8131 113.084 53.9551 113.084 46.729C113.084 39.5028 107.226 33.6449 100 33.6449ZM166.355 100C166.355 92.7738 160.497 86.9159 153.271 86.9159L153.271 53.271C179.079 53.271 200 74.1923 200 100C200 125.808 179.079 146.729 153.271 146.729C127.463 146.729 106.542 125.808 106.542 100H140.187C140.187 107.226 146.045 113.084 153.271 113.084C160.497 113.084 166.355 107.226 166.355 100ZM46.729 113.084C39.5028 113.084 33.6449 107.226 33.6449 100C33.6449 92.7738 39.5028 86.9159 46.729 86.9159C53.9551 86.9159 59.8131 92.7738 59.8131 100H93.4579C93.4579 74.1923 72.5367 53.271 46.729 53.271C20.9213 53.271 0 74.1923 0 100C0 125.808 20.9213 146.729 46.729 146.729V113.084ZM100 166.355C107.226 166.355 113.084 160.497 113.084 153.271H146.729C146.729 179.079 125.808 200 100 200C74.1923 200 53.271 179.079 53.271 153.271C53.271 127.463 74.1923 106.542 100 106.542L100 140.187C92.7738 140.187 86.9159 146.045 86.9159 153.271C86.9159 160.497 92.7738 166.355 100 166.355Z" fill="#fff" />
                    </g>
                    <defs>
                        <clipPath id="clip0_231_648">
                            <rect width="200" height="200" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <div className='hidden lg:block'>
                    <h2 onClick={clickedMail} className='nav-item hover:underline text-invert font-bold font-poppins text-xl cursor-pointer'>
                        {copy}
                    </h2>
                </div>
            </nav>

        </>
    )
}

export default Navbar