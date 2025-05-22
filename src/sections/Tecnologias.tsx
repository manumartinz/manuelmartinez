import Carrousel from "../components/Carrousel"
function Tecnologias() {
    return (
        <section className="max-w-screen min-w-screen w-screen h-full  ">
            <div className="flex flex-col items-center justify-center py-10 gap-12 mt-8">
                <h3 className="text-2xl lg:text-4xl font-bold text-[#F9F6EE] font-cal-sans uppercase w-full lg:w-2/6 text-center px-5 lg:px-0">
                    Algunas herramientas con las que he trabajado
                </h3>
                <Carrousel />
            </div>
        </section>
    )
}

export default Tecnologias