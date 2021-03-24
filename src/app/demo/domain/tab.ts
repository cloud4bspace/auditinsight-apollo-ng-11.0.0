class Thema {
}

export class Tab {
    id?: number;
    header: string;
    bezeichnung?: string;
    content: string;
    themen: Thema[];


    constructor(id: number, header: string, bezeichnung: string, content: string, themen: Thema[]) {
        this.id = id;
        this.header = header;
        this.bezeichnung = bezeichnung;
        this.content = content;
        this.themen = themen;
    }
}
