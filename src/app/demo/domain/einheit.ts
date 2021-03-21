import {Person} from './person';

export interface Einheit {
    id?: number;
    nummer: string;
    bezeichnung?: string;
    kuerzel?: string;
    departementid?: number;
    ewb?: boolean;
    pga?: boolean;
    orgtyp?: string;
    orgstatus?: string;
    // personen?: Person;
}
