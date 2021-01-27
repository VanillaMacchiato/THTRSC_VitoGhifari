import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userData = this.dataManager.getUserData();
  columnsToDisplay = ['namaLengkap', 'penggunaAktif'];
  

  constructor(
    private dataManager: DataManagerService,
  ) { }

  ngOnInit(): void {
  }
}
