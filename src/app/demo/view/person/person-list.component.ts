import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';
import {Person} from '../../domain/person';
import {PersonService} from '../../service/personservice';

@Component({
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `],
})
export class PersonListComponent implements OnInit {

    personen: Person[];
    statuses: any[];

    @ViewChild('dt') table: Table;

    constructor(private personService: PersonService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Personen', routerLink: ['/person/liste'] },
            { label: 'Liste', routerLink: ['/person/liste'] }
        ]);
    }

    ngOnInit() {
        this.personService.getPersonen().then(personen => {
            this.personen = personen;
            console.log('Personen wurde geladen: ' + personen.length);
        });

        this.statuses = [
            {label: 'aktiv', value: '1'},
            {label: 'inaktiv', value: '0'}
        ];
    }

    onSort() {
    }

    updateRowGroupMetaData() {
    }
}
