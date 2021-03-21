import {Component, OnInit, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {AppBreadcrumbService} from '../../../app.breadcrumb.service';
import {Kontenrahmen} from '../../domain/kontenrahmen';
import {KontenrahmenService} from '../../service/kontenrahmenservice';

@Component({
    templateUrl: './kontenrahmen-list.component.html',
    styleUrls: ['./kontenrahmen-list.component.scss'],
    styles: [`
        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `],
})
export class KontenrahmenListComponent implements OnInit {

    kontenrahmen: Kontenrahmen[];
    statuses: any[];

    @ViewChild('dt') table: Table;

    constructor(private kontenrahmenService: KontenrahmenService, private breadcrumbService: AppBreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Jahresrechnung', routerLink: ['/jahresrechnung/kontenrahmen'] },
            { label: 'Kontenrahmen', routerLink: ['/jahresrechnung/kontenrahmen'] }
        ]);
    }

    ngOnInit() {
        this.kontenrahmenService.getKontenrahmen().then(kontenrahmen => {
            this.kontenrahmen = kontenrahmen;
            console.log('Kontenrahmen wurde geladen: ' + kontenrahmen.length);
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
