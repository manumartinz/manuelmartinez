import encode from "../assets/images/encode.png";
import fanken from "../assets/images/fanken.png";
import tokelab from "../assets/images/tokelab.png";
import ucc from "../assets/images/ucc.png";

function MobileHorizontal() {
  return (
    <section className="relative h-full w-screen">
    <div className="flex flex-col justify-center h-full w-screen">
        <div className="panel w-full h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
            <div className="bg-fanken rounded-xl pl-8 pt-8 pr-8">
                <span className="font-cal-sans text-2xl">FANKEN</span>
                <a href="https://fanken.io" target="_blank" rel="noopener noreferrer">
                    <img src={fanken} alt="bg-gradient" width={700} />
                </a>
            </div>
        </div>

        <div className="panel w-full h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
            <div className="bg-encode rounded-xl pl-8 pt-8 pr-8">
                <span className="font-cal-sans text-2xl">ENCODE</span>
                <a href="https://encodesa.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src={encode} alt="bg-gradient" width={700} />
                </a>
            </div>
        </div>

        <div className="panel w-full h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
            <div className="bg-ucc rounded-xl pl-8 pt-8 pr-8">
                <span className="font-cal-sans text-2xl">UCC</span>
                <a href="https://ucc.edu.ar/campus-virtual" target="_blank" rel="noopener noreferrer">
                    <img src={ucc} alt="bg-gradient" width={700} />
                </a>
            </div>
        </div>

        <div className="panel w-full h-full flex flex-col items-center justify-center text-[#F9F6EE] p-8">
            <div className="bg-tokelab rounded-xl pl-8 pt-8 pr-8">
                <span className="font-cal-sans text-2xl">TOKELAB</span>
                <a href="https://tokelab.com.ar/" target="_blank" rel="noopener noreferrer">
                    <img src={tokelab} alt="bg-gradient" width={700} />
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default MobileHorizontal