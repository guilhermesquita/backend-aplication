import { Entity } from "typeorm"
import { Column } from "typeorm/decorator/columns/Column"
import { PrimaryColumn } from "typeorm/decorator/columns/PrimaryColumn";

@Entity()
export class Pet {
    @PrimaryColumn()
    id: string; 

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    size: string;
}