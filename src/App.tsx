import logo from './assets/logo.png'
import { Calendar } from 'lucide-react'

function App() {

  return (
    <div className="p-6 flex flex-col gap-8 bg-slate-500 min-h-screen"> 
      <header className="flex justify-between items-center ">
        <div className='flex items-center gap-2'>
          <img className='w-14' src={logo} alt="Clínica Collab" />
          <h1 className='font-extrabold text-2xl text-slate-300'>Agendamentos Rápidos - Clínica Collab</h1>
        </div>
       
        <div className='flex gap-2 text-slate-300 items-center'>
          <Calendar
            size={18}
          />
          <span>27/05/2026</span>
        </div>
      </header>
      <main className='grid grid-cols-3'>
        <section className=' bg-slate-300 col-span-2'>Agenda do Dia</section>
        <section className='col-span-1 bg-white'>Painel Novo Agendamento</section>
      </main>
    </div>
  )
}

export default App
