import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Einheit} from '../domain/einheit';


@Injectable()
export class EinheitService {
    private einheiten: Einheit[];

    constructor(private http: HttpClient) {
    }

    getEinheiten() {
        return this.http.get<any>('assets/demo/data/einheiten.json')
            .toPromise()
            .then(res => res.data as Einheit[])
            .then(data => data);
    }

    getEinheit(einheitId: number): Einheit {
        console.log('EinheitID = ' + einheitId);
        this.getEinheiten().then(einheiten => {
            this.einheiten = einheiten;
        });
        return this.einheiten.find(x => x.id == einheitId); // == ist genau richtig...
    }
}
