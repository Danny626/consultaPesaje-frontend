import { Recinto } from './recinto';
import { Rol } from './rol';

export class Usuario {
    public username: string;
    public password: string;
    public email: string;
    public pic: string;
    public fullName: string;
    public occupation: string;
    public phone: string;
    public address: string;
    public state: string;
    public recinto: Recinto;
    public roles: Rol[];
}
