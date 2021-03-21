import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Einheit} from '../domain/einheit';


@Injectable()
export class EinheitService {

    constructor(private http: HttpClient) {
    }

    getEinheiten() {
        return this.http.get<any>('assets/demo/data/einheiten.json')
            .toPromise()
            .then(res => res.data as Einheit[])
            .then(data => data);
    }
}
