export interface Proveedor{
    id: number;
    nombre: string;
    contacto: string;
    direccion: string;
    medio: {movil: number,  email: string};
}