import {Frage} from './frage';

export class Thema {
    id?: number;
    titel: string;
    bezeichnung?: string;
    content: string;
    fragen: Frage[];

    constructor(id: number, titel: string, bezeichnung: string, content: string, fragen: Frage[]) {
        this.id = id;
        this.titel = titel;
        this.bezeichnung = bezeichnung;
        this.content = content;
        this.fragen = fragen;
    }
}
