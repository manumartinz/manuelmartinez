import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import encode from "../assets/images/encode.png";
import fanken from "../assets/images/fanken.png";
import tokelab from "../assets/images/tokelab.png";
import ucc from "../assets/images/ucc.png";
import "../styles/HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const scrollWrapper = scrollWrapperRef.current;
        const panels = gsap.utils.toArray<HTMLElement>(".panel");

        if (!container || !scrollWrapper || panels.length === 0) return;

        const totalScrollWidth = scrollWrapper.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;

        gsap.to(scrollWrapper, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top", // Comienza cuando el contenedor toca el top
                end: () => `+=${scrollDistance}`, // Termina después de scrollear la distancia completa
                scrub: 1, // Suaviza el scroll
                pin: true, // Mantiene el contenedor fijo durante el scroll
                anticipatePin: 1, // Mejora el rendimiento del pin
                snap: {
                    snapTo: 1 / (panels.length - 1), // Divide el scroll en secciones iguales
                    duration: { min: 0.2, max: 0.3 }, // Duración del snap
                    ease: "power1.inOut" // Tipo de easing para el snap
                },
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden">
            <div ref={scrollWrapperRef} className="flex justify-center h-full w-max">
                <div className="panel w-10/12 h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
                    <div className="bg-fanken rounded-xl pl-8 pt-8 pr-8">
                        <span className="font-cal-sans text-3xl">FANKEN</span>
                        <a href="https://fanken.io" target="_blank" rel="noopener noreferrer">
                            <img src={fanken} alt="bg-gradient" width={800} />
                        </a>
                    </div>
                </div>

                <div className="panel w-10/12 h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
                    <div className="bg-encode rounded-xl pl-8 pt-8 pr-8">
                        <span className="font-cal-sans text-3xl">ENCODE</span>
                        <a href="https://encodesa.com.ar/" target="_blank" rel="noopener noreferrer">
                            <img src={encode} alt="bg-gradient" width={800} />
                        </a>
                    </div>
                </div>

                <div className="panel w-10/12 h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
                    <div className="bg-ucc rounded-xl pl-8 pt-8 pr-8">
                        <span className="font-cal-sans text-3xl">UCC</span>
                        <a href="https://ucc.edu.ar/campus-virtual" target="_blank" rel="noopener noreferrer">
                            <img src={ucc} alt="bg-gradient" width={800} />
                        </a>
                    </div>
                </div>

                <div className="panel w-10/12 h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
                    <div className="bg-tokelab rounded-xl pl-8 pt-8 pr-8">
                        <span className="font-cal-sans text-3xl">TOKELAB</span>
                        <a href="https://tokelab.com.ar/" target="_blank" rel="noopener noreferrer">
                            <img src={tokelab} alt="bg-gradient" width={800} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
