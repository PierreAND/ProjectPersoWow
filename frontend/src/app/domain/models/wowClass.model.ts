export interface Classes {
    id: number;
    name: string,
}


export interface Specialization {
    id: number,
    name: string,
    role: 'TANK' | 'HEAL' | 'DPS'
}
