import { Region } from "./region";
import { Task } from "./task";

export class Cliente {
 id!: number;
 nombre!: string;
 apellido!:string;
 createdAt!: string;
 email!: string;
 imagen!: string;
 region!: Region;
 task!: Task;
}
