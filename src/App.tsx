import logo from './assets/logo.png'
import { AppointmentPanel } from './components/AppointmentPanel'
import { generateTimeSlots } from './utils/timeUtils'
import { type Doctor, type Appointment } from './types/clinic';
import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { dataAtual, dataAtualParaExibir } from './utils/dateUtils'
import { db } from './config/firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {

  const [currentDate, setCurrentDate] = useState<string>(dataAtual);
  const timeSlots = generateTimeSlots();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([])


  useEffect(() => {
    const colecaoMedicosRef = collection(db, 'medicos')

    const unsubscribe = onSnapshot(colecaoMedicosRef, (snapshot) => {
      const listaMedicos: Doctor[] = []
      snapshot.forEach((doc) => {
        const dados = doc.data()
        listaMedicos.push({
          id: doc.id,
          name: dados.name,
          specialty: dados.specialty
        })
      })
      setDoctors(listaMedicos)
    })
    return () => unsubscribe()
  }, [])


  useEffect(() => {
    const colecaoRef = collection(db, 'agendamentos');
    const unsubscribe = onSnapshot(colecaoRef, (snapshot) => {
      const listaConsultas: Appointment[] = [];

      snapshot.forEach((doc) => {
        const dados = doc.data();
        listaConsultas.push({
          id: doc.id,
          patientName: dados.patientName,
          doctorId: dados.doctorId,
          date: dados.date,
          startTime: dados.startTime,
          endTime: dados.endTime
        });
      });

      setAppointments(listaConsultas);
    });
    return () => unsubscribe();
  }, []);

  const handleSaveAppointment = async (newApp: Omit<Appointment, 'id'>) => {
    try {
      await addDoc(collection(db, 'agendamentos'), {
        patientName: newApp.patientName,
        doctorId: newApp.doctorId,
        date: newApp.date,
        startTime: newApp.startTime,
        endTime: newApp.endTime
      })
    } catch (error) {
      console.error("Erro ao salvar no Firebase:", error);
      alert("Houve um erro ao salvar o agendamento na nuvem.");
    }
  }

  const handleDelete = async (id: string | number) => {
    const confirmar = window.confirm("Tem a certeza de que deseja cancelar?")
    if (confirmar) {
      try {
        await deleteDoc(doc(db, 'agendamentos', String(id)))
      } catch (error) {
        console.error("Erro ao deletar do Firebase:", error);
      }
    }

  }
  //Colunas dinamicas para quantos medicos for preciso
  const totalColunas = 1 + (doctors.length * 2);

  return (
    <div className="p-6 flex flex-col gap-8 bg-gray-400 min-h-screen">
      <header className="flex justify-between items-center text-slate-700">
        <div className='flex items-center gap-2'>
          <img className='w-14' src={logo} alt="Clínica Collab" />
          <h1 className='font-semibold text-2xl '>Agendamentos Rápidos - Clínica Collab</h1>
        </div>



        <div className='flex gap-2 items-center bg-white border border-gray-300 p-1.5 rounded-md shadow-sm text-sm font-semibold text-slate-700'>
          <span>{dataAtualParaExibir()}</span>
        </div>


      </header>
      <main className='grid grid-cols-3 gap-4'>
        <section className='p-6 bg-gray-100 col-span-2 rounded-lg'>

          <div className='flex justify-center gap-4 pb-4 text-center text-2xl'>
            <h2>Agenda do Dia</h2>
            <div className='flex gap-2 items-center bg-white border border-gray-300 p-1.5 rounded-md shadow-sm'>

              <input
                type="date"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                className="bg-transparent text-slate-700 outline-none text-sm font-semibold cursor-pointer"
              />
            </div>
          </div>
          <div className='grid items-center text-sm font-semibold border border-gray-400 text-center'
            style={{ gridTemplateColumns: `repeat(${totalColunas}, minmax(0, 1fr))` }}>
            <div className='col-span-1 border-gray-400 border-r py-2 px-1'>
              Horário
            </div>
            {doctors.map((medico) => (
              <div
                key={medico.id}
                className='col-span-2 border-gray-400 border-r py-2 px-1'>
                {medico.name} - {medico.specialty}
              </div>
            ))}


          </div>
          <div>
            {timeSlots.map((horario, index) => {

              return (
                <div
                  key={index}
                  className='grid leading-8 text-center'
                  style={{ gridTemplateColumns: `repeat(${totalColunas}, minmax(0, 1fr))` }}
                >
                  {/*Coluna 1 dos horários*/}
                  <div className='h-full  border-gray-400 border-b border-l border-r col-span-1'>
                    {horario}
                  </div>

                  {doctors.map((medico) => {
                    const consulta = appointments.find(
                      a => a.startTime === horario &&
                        String(a.doctorId) === String(medico.id) &&
                        a.date === currentDate
                    );
                    return (
                      < div
                        key={medico.id}
                        className='px-4 items-center flex justify-between h-full bg-white border-gray-400 border-r border-b col-span-2'
                      >

                        {
                          consulta ? (
                            <>
                              <div title={consulta?.patientName}>{consulta?.patientName}</div>

                              <button
                                onClick={() => handleDelete(consulta.id)}
                                className="hover:scale-110 transition-transform p-1 rounded hover:bg-red-50"
                                title="Apagar agendamento"
                              >
                                <Trash2
                                  size={16}
                                  color='red'
                                />
                              </button>
                            </>
                          ) : (
                            <span className="text-gray-300 select-none">-</span>
                          )}
                      </div>
                    )
                  })}

                </div>
              )
            })}





          </div>
        </section >


        <section className='p-6 col-span-1 bg-white min-w-xs rounded-lg'>
          <AppointmentPanel
            onSaveAppointment={handleSaveAppointment}
            appointments={appointments}
            doctors={doctors}
          />
        </section>
      </main >
    </div >
  )
}

export default App
