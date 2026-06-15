export interface Doctor {
    id: string
    name: string
    specialty: string
} 

export interface Appointment {
    id: string | number
    patientName: string
    doctorId: string | number
    date: string
    startTime: string
    endTime: string
}