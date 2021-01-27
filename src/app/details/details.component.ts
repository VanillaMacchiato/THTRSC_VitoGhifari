import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // Menginisialisasi user (objek) dan userData (array of object)
  user: any;
  userData = this.dataManager.getUserData();

  constructor(
    private actRoute: ActivatedRoute,
    private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
    // Mendapatkan link untuk tiap individu
    const routeParams = this.actRoute.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get("id"));

    this.user = this.userData.find(user => user.id === idFromRoute);
  }

}
