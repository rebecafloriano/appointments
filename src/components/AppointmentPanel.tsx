import {useState, type SyntheticEvent } from 'react'
import { type Doctor } from '../types/clinic'
import { generateTimeSlots } from '../utils/timeUtils';

export const AppointmentPanel = () => {
    const [patientName, setPatientName] = useState('')
    const [selectedDoctorId, setSelectedDoctorId] = useState<Doctor['id']>('');
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')

   
    // Guardamos a lista gerada numa variável para usar no JSX
    const availableSlots = generateTimeSlots();

    // 2. FUNÇÃO UTILITÁRIA: Calcula o fim baseado no início escolhido (+35 min)
    const calculateEndTime = (timeString: string): string => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':').map(Number);
        const dateObj = new Date();
        dateObj.setHours(hours);
        dateObj.setMinutes(minutes + 35);

        return `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
    };

    const handleConfirm = (e: SyntheticEvent) => {
        e.preventDefault();

        if (!patientName || !selectedDoctorId || !date || !startTime) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const newAppointment = {
            patientName,
            doctorId: selectedDoctorId,
            date,
            startTime,
            endTime: calculateEndTime(startTime) // O fim continua a ser calculado sozinho!
        };

        console.log("Agendamento criado no slot de 35min:", newAppointment);

        // Limpar os campos
        setPatientName('');
        setSelectedDoctorId('');
        setDate('');
        setStartTime('');
    };

    const [selectDoctorId, setSelectDoctorId] = useState<Doctor['id']>('')
    return (
        <form onSubmit={handleConfirm} className="flex flex-col gap-5">
            <h2 className="text-xl mb-2 self-center font-semibold text-gray-800">Painel de Agendamento</h2>
            <div>
                <label className="text-md" htmlFor="patientName">Paciente</label>
                <input
                    className="p-1 w-full border border-gray-300 rounded-md"
                    type="text"
                    value={patientName}
                    onChange={(e)=>{setPatientName(e.target.value)}}
                    
                />
            </div>
            <div className="flex flex-col">
                <label className="text-md" htmlFor="doctors">Médico</label>
                <select
                    className="p-1 w-full border border-gray-300 rounded-md" 
                    id="doctors"
                    value={selectDoctorId}
                    onChange={(e)=> setSelectDoctorId(e.target.value)}
                >
                    <option value="">Escolha um médico...</option>
                    <option value="1">Dr. Ramos</option>
                    <option value="2">Dr. Neves</option>
                    <option value="3">Dra. Souza</option>
                </select>              
            </div>
            <div>
                <label className="text-md" htmlFor="date">Data da Consulta</label>
                <input
                    className="p-1 text-slate-800 w-full border border-gray-300 rounded-md"
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                />
            </div>
            {/* 🚀 NOVO CAMPO: Horários Disponíveis em formato SELECT */}
            <div>
                <label className="text-md font-medium text-gray-700" htmlFor="startTime">Horário Disponível</label>
                <select
                    className="p-1 w-full border border-gray-300 rounded-md text-slate-800 focus:outline-blue-500"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                >
                    <option value="">Escolha um horário...</option>
                    {availableSlots.map(slot => (
                        <option key={slot} value={slot}>
                            {slot} às {calculateEndTime(slot)}
                        </option>
                    ))}
                </select>
            </div>
            <button
                className="bg-blue-700 p-2 rounded-md text-md mt-4 text-white hover:bg-blue-700/85"
                type="submit"
            >
                Confirmar Agendamento
            </button>

        </form>
    )
}



