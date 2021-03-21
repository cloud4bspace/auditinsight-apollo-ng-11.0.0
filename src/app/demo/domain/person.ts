import {Einheit} from './einheit';

export interface Person {
    id?: number;
    nachname?: string;
    vorname?: string;
    maKurzzeichen?: string;
    einheit?: Einheit;
}
