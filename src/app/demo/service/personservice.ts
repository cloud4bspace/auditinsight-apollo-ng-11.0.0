import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../domain/person';


@Injectable()
export class PersonService {

    constructor(private http: HttpClient) {
    }

    getPersonen() {
        return this.http.get<any>('assets/demo/data/personen.json')
            .toPromise()
            .then(res => res.data as Person[])
            .then(data => data);
    }
}
