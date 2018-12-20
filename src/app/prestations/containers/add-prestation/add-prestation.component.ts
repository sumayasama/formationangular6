import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private ps: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation) {
    this.ps.add(item).then(() => {
      this.router.navigate(['../', {relativeTo: this.route}]); // route relative (import service Activatedroute)

    });
// this.router.navigate(['prestations']); // route absolue le '/' au debut n'a aucun impact
}
}
