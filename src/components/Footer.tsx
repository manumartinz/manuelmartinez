import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react';
import '../styles/Footer.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const { useRef } = React;

function Footer() {
    const text = useRef<HTMLHeadingElement>(null);
    const container = useRef<HTMLElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    const arrItems = ['Inicio', 'Experiencia', 'Contacto', 'LinkedIn', 'Spotify'];

    useGSAP(() => {
        gsap.fromTo(
            text.current,
            { top: 300, opacity: 0 },
            {
                top: 140,
                opacity: 1,
                duration: 5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 10%',
                    toggleActions: 'play none none none',
                },
            }
        );
        gsap.fromTo(
            itemRefs.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 90%',
                },
            }
        );
    }, { scope: container });

    return (
        <footer ref={container} className='max-w-screen min-w-screen w-full bottom-0 h-72 bg-[#0a0a0a] relative overflow-hidden cursor-default'>
            <div className='w-full flex justify-center items-center pt-16'>
                <ul className='flex flex-col lg:flex-row justify-center items-center lg:gap-24'>
                    {arrItems.map((text, i) => (
                        <li
                            key={i}
                            ref={el => {
                                itemRefs.current[i] = el;
                            }}
                        >
                            <a className='text-lg font-poppins hover:text-[#b8b6b0] transition-all duration-300 text-[#F9F6EE]' href="#hero">{text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <h1 ref={text} className='hidden lg:block text-custom'>LONGWORD</h1>
            <h1 className='block lg:hidden text-custom'>LONGWORD</h1>
        </footer>
    );
}

export default Footer;
