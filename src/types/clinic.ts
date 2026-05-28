export interface Doctor {
    id: string | number
    name: string
    specialty: string
} 

export interface Appointment {
    id: string | number
    pacientName: string
    doctorId: string | number
    date: string
    startTime: string
    endTime: string
}