import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client[];
  public entetes: string[];

    constructor(private cs: ClientService) {

    }

    ngOnInit() {
      this.collection = this.cs.collection;
      this.entetes = ['name', 'email', 'State'];
    }

}
