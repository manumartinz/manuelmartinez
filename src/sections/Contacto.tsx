import { useState } from 'react';
import '../styles/Contacto.css';

function Contacto() {

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendForm(): string {
    console.log(name, company, email, message);
    return 'send';

  }

  return (
    <>
      <section className='flex flex-row justify-center px-64 my-32 mb-32'>
        <div className='w-64 bg-profile'>
        </div>
        <form onSubmit={() => sendForm()} className='flex flex-col gap-4 px-20'>
          <h2 className='text-4xl font-geist font-bold text-white mb-8'>Contactame!</h2>
          <div className='flex gap-4'>
            <div className='w-full'>
              <span className='text-gray-200 font-geist font-bold text-sm'>Nombre y apellido</span>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ingresa tu nombre y apellido"
                className="w-full rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-400 focus:outline-none"
              />
            </div>
            <div className='w-full'>
              <span className='text-gray-200 font-geist font-bold text-sm'>Empresa</span>
              <input
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Ingresa el nombre de tu empresa"
                className="w-full rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <span className='text-gray-200 font-bold text-sm font-geist'>Correo electrónico</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="w-full rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div>
            <span className='text-gray-200 font-bold font-geist text-sm'>Mensaje</span>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ingresa tu mensaje"
              className="w-full h-32 rounded-md border border-gray-700 bg-zinc-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-400 focus:outline-none resize-none"
            />
          </div>
          <button
            type='submit'
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Enviar mensaje
          </button>
        </form>

      </section>
    </>
  )
}

export default Contacto