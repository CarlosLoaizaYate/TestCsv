import { NombreColumnas } from "./nombre-columnas";

export interface ArchivoCargado {
    columnsNameFile: NombreColumnas[];
    id: number;
    insertDate: Date;
    uploadFileName: string;

}
