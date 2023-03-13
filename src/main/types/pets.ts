export enum PET_SYZE {
    SMALL = "Pequeno Porte",
    MEDIUM = "Médio Porte",
    LARGE = "Pequeno Porte"
}
  
export interface Ipet {
    id: string,
    name: string,
    price: number,
    size: string
}