export interface Doctor {
    id: string
    name: string
    specialty: string
} 

export interface Appointment {
    id: string
    patientName: string
    doctorId: string
    date: string
    startTime: string
    endTime: string
}