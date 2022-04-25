export const ROLES = {
    LOGISTICS: 'לוגיסטיקה',
    TASH:      'ת"ש',
    SHALISHUT: 'שלישות', 
    REFUA:     'רפואה', 
    RASAR:     'רס"ר',
}

export interface iUser {
    fullName: string,
    id: string,
    role?: string,
    approves: iResponse[]
}

export interface iResponse {
    responseFrom: string,
    status: boolean
}