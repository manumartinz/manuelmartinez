
function Experiencia() {
  return (
    <section className='w-full h-full'>
      <div className="px-12 md:px-32 lg:px-60">
        <div className="font-geist border-t flex flex-col lg:flex-row gap-10 border-gray-800 py-10">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-5 lg:w-6/12">
            <span className="text-sm items-start text-left text-gray-500 font-light">08, 2024 - Actualidad</span>
            <div className="flex flex-col">
              <h3 className="text-4xl md:text-5xl text-white">Encodelabs.</h3>
              <p className="text-lg text-gray-500 font-light">Frontend Developer</p>
            </div>
          </div>
          <ul className="text-md text-white font-light lg:w-6/12 list-disc ">
            <li>
              Desarrollo de interfaces de usuario altamente interactivas para el sistema Fintech de Fanken, implementando internacionalización (i18n),
              un correcto manejo del state management de <b>React</b> y optimizando el rendimiento de la aplicación, lo que permitió
              reducir los tiempos de carga y mejorar el posicionamiento SEO del sitio web. Además, me aseguré de mantener la consistencia visual
              y funcional en múltiples navegadores y dispositivos (cross-browser y cross-device).
            </li>
            <li>
              Formo parte del equipo de desarrollo de <b>UserFlow</b>, una aplicación orientada a la gestión de documentos e información empresarial,
              desarrollada con <b>Angular 18</b> y <b>.NET</b>. Entre sus funcionalidades se destacan la firma digital y electrónica, el almacenamiento seguro
              de datos de usuario, la gestión avanzada de roles y un sistema de notificaciones en tiempo real.
            </li>
            <li>
              Además de mis tareas de desarrollo, colaboro activamente con el equipo brindando retroalimentación constructiva,
              explicando conceptos técnicos y compartiendo ideas para mejorar tanto la calidad del código como del diseño.
            </li>
          </ul>
        </div>
        <div className="font-geist border-t flex flex-col lg:flex-row gap-10 border-gray-800 py-10">
          <div className="flex flex-col lg:flex-row justify-start items-start gap-5 lg:w-6/12">
            <span className="text-sm items-start text-left text-gray-500 font-light text-nowrap">06, 2022 - 08, 2024</span>
            <div className="flex flex-col">
              <h3 className="text-4xl md:text-5xl text-white">Universidad Católica de Córdoba</h3>
              <p className="text-lg text-gray-500 font-light">FullStack Developer</p>
            </div>
          </div>
          <ul className="text-md text-white font-light lg:w-6/12 list-disc">
            <li>
              Participé en el desarrollo del sistema de solicitud de becas para alumnos, con un enfoque centrado en la experiencia de usuario,
              priorizando la simplicidad y usabilidad del formulario para asegurar y facilitar el proceso de postulación de los ingresantes.
            </li>
            <li>
              Estuve a cargo del desarrollo de un micro frontend para la gestión de archivos, implementado buenas prácticas y una arquitectura
              abstraída y reutilizable. Este proyecto fue integrado en diversos proyectos, simplificando el proceso de carga de documentos sin importar la
              aplicación donde se utilice.
            </li>
            <li>
              Participé en el desarrollo de un planificador de cursos construido con React y Redux, priorizando el uso adecuado del state management
              del proyecto y la correcta implementación de los hooks de  React.
            </li>
            <li>
              Participé en el desarrollo e implementación de soluciones escalables, así como en el mantenimiento y evolución de las APIs institucionales,
              desarrolladas con PHP y Symfony.
            </li>
            <li>
              Contribuí a la migración del API de la universidad a NestJS, aplicando buenas prácticas de desarrollo y priorizando una arquitectura
              bien estructurada, mantenible y escalable.
            </li>
            <li>
              Realicé mantenimiento y mejoras continuas en el sistema de autogestión docente, garantizando su estabilidad y adecuación a las
              necesidades institucionales.
            </li>
          </ul>
        </div>
        {/* <div className="font-geist border-t flex border-gray-800 py-10">
          <div className="flex justify-start items-start gap-5 w-6/12">
            <span className="text-sm items-start text-left text-gray-500 font-light">04, 2020 - 06, 2022</span>
            <div className="flex flex-col">
              <h3 className="text-5xl text-white">Mondo</h3>
              <p className="text-lg text-gray-500 font-light">Frontend Developer</p>
            </div>
          </div>
          <ul className="text-md text-white font-light w-6/12 list-disc">
            <li>Participé en un proyecto de internship brindado por la universidad, que consistió en la maquetación web para una empresa de marketing, aplicando los conocimientos adquiridos con un fuerte enfoque en SEO y buenas prácticas de desarrollo web.</li>
          </ul>
        </div> */}
      </div>
    </section>
  )
}

export default Experiencia