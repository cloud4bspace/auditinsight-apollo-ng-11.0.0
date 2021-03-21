import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';
import {Einheit} from '../../domain/einheit';
import {EinheitService} from '../../service/einheitservice';

@Component({
    templateUrl: './einheit-list.component.html',
    styleUrls: ['./einheit-list.component.scss'],
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `],
})
export class EinheitListComponent implements OnInit {

    einheiten: Einheit[];

    @ViewChild('dt') table: Table;

    constructor(private einheitService: EinheitService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Einheiten', routerLink: ['/einheit/liste'] }
        ]);
    }

    ngOnInit() {
        this.einheitService.getEinheiten().then(einheiten => {
            this.einheiten = einheiten;
            console.log('Einheiten wurden geladen: ' + einheiten.length);
        });
    }

    onSort() {
    }

    updateRowGroupMetaData() {
    }
}

