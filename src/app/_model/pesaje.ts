import { Operacion } from "./operacion";

export class Pesaje {
    public gestion: number;
    public codPesaje: number;
    public placa: string;
    public pesoBruto: number;
    public pesoNeto: number;
    public pesoTara: number;
    public fechaBlz: Date;
    public usrCod: string;
    public observacion: string;
    public numeracion: number;
    public operacion: Operacion;
    public recintoCod: string;
}