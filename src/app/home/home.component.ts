import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Mendapatkan data user dari service dataManager
  userData = this.dataManager.getUserData();
  // Untuk menampilkan tabel
  columnsToDisplay = ['namaLengkap', 'penggunaAktif'];
  

  constructor(
    private dataManager: DataManagerService,
  ) { }

  ngOnInit(): void {
  }
}
