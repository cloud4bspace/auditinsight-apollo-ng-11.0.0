export class Frage {
    id?: number;
    titel: string;
    bezeichnung?: string;
    type: string;

    constructor(id: number, titel: string, bezeichnung: string, type: string) {
        this.id = id;
        this.titel = titel;
        this.bezeichnung = bezeichnung;
        this.type = type;
    }
}
