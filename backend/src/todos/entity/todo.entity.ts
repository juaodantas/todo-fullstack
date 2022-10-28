import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryColumn()
    id?: number;

    @Column({nullable: false})
    content?: string;

    @Column({nullable: false})
    isDone?: boolean;
}
