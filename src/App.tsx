import logo from './assets/logo.png'
import { Calendar } from 'lucide-react'
import { AppointmentPanel } from './components/AppointmentPanel'

function App() {

  return (
    <div className="p-6 flex flex-col gap-8 bg-gray-400 min-h-screen"> 
      <header className="flex justify-between items-center text-slate-700">
        <div className='flex items-center gap-2'>
          <img className='w-14' src={logo} alt="Clínica Collab" />
          <h1 className='font-semibold text-2xl '>Agendamentos Rápidos - Clínica Collab</h1>
        </div>
       
        <div className='flex gap-2 items-center'>
          <Calendar
            size={18}
          />
          <span>27/05/2026</span>
        </div>
      </header>
      <main className='grid grid-cols-3 gap-4'>
        <section className='p-6 bg-gray-300 col-span-2 rounded-lg'>Agenda do Dia</section>
        <section className='p-6 col-span-1 bg-white min-w-xs rounded-lg'>
          <AppointmentPanel/>
        </section>
      </main>
    </div>
  )
}

export default App
