import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Kontenrahmen} from '../domain/kontenrahmen';


@Injectable()
export class KontenrahmenService {

    constructor(private http: HttpClient) {
    }

    getKontenrahmen() {
        return this.http.get<any>('assets/demo/data/kontenrahmen.json')
            .toPromise()
            .then(res => res.data as Kontenrahmen[])
            .then(data => data);
    }
}
