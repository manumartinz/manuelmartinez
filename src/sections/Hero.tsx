import gsap from "gsap";
import { useEffect, useRef } from "react";
import "../styles/hero.css";

function scrambleText(element: HTMLElement, text: string, duration = 1.5) {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;
    const totalIterations = text.length * 3;
    const interval = setInterval(() => {
        const scrambled = text
            .split("")
            .map((letter, i) => {
                if (i < iterations / 3) return letter;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        element.textContent = scrambled;

        iterations++;
        if (iterations > totalIterations) {
            clearInterval(interval);
            element.textContent = text;
        }
    }, duration * 1000 / totalIterations);
}

export default function Hero() {
    const box = useRef<(HTMLElement | null)[]>([]);
    const circleRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const titleEl = box.current[0];
        const subtitleEl = box.current[1];

        gsap.fromTo(
            box.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.1,
                ease: "power3.out",
                onComplete: () => {
                    if (titleEl)
                        scrambleText(titleEl, "Manuel Martínez");

                    if (subtitleEl) {
                        const originalText = "Software Developer at Encodelabs.";
                        scrambleText(subtitleEl, originalText);

                        setTimeout(() => {
                            if (!subtitleEl.textContent) return;

                            const updatedText = originalText.replace("Software", "<span class='highlight'>Frontend</span>");

                            subtitleEl.innerHTML = updatedText;

                            const span = subtitleEl.querySelector(".highlight") as HTMLElement;
                            if (span) {
                                scrambleText(span, "Frontend");
                            }
                        }, 2000);
                    }
                }
            }
        );

        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current || !circleRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - 300;
            const y = e.clientY - rect.top - 470;

            circleRef.current.style.transform = `translate(${x}px, ${y}px) translate(25%, 25%)`;
        };

        if (sectionRef.current) {
            sectionRef.current.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (sectionRef.current) {
                sectionRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="hero" 
            className="w-full bg-hero flex justify-between items-center relative px-8 md:px-32 lg:px-52 rounded-3xl cursor-crosshair lg:cursor-none min-h-[400px] overflow-hidden"
        >
            <div 
                ref={circleRef}
                className="absolute lg:block hidden w-48 h-48 bg-gradient-to-r from-white to-white rounded-full blur-xl opacity-35 pointer-events-none"
                style={{
                    willChange: 'transform'
                }}
            />

            <div className="flex flex-col lg:gap-2 w-full lg:w-8/12 relative z-10">
                <h1
                    className="text-4xl lg:text-6xl font-bold font-cal-sans"
                    ref={(el) => { box.current[0] = el; }}
                >
                    ****** *******
                </h1>
                <h2 className="text-6xl lg:text-8xl font-bold font-cal-sans">
                    <span ref={(el) => { box.current[1] = el; }}>
                        ******** ********* ** ***********
                    </span>
                </h2>
            </div>
        </section>
    );
}

