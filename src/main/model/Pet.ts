import { PET_SYZE } from "../types/pets"

export class Pet {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private size: string
    ) { }

    public getId(){
        return this.id
    }

    public setId(newId: string){
        this.id = newId
    }

    public getName(){
        return this.name
    }

    public setName(newName: string){
        this.name = newName
    }

    public getPrice(){
        return this.price
    }

    public setPrice(newPrice: number){
        this.price = newPrice
    }

    public getSize(){
        return this.size
    }

    public setSize(newSize: PET_SYZE){
        this.size = newSize
    }

}