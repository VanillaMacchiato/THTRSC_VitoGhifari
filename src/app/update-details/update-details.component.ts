import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  // Inisialisasi user (data individu), userData (keseluruhan data), dan form
  user: any;
  userData = this.dataManager.getUserData();
  form: FormGroup;

  // Membuat option Pria dan Wanita pada selection
  genders: any[] = [
    { name: 'Pria' },
    { name: 'Wanita' }
  ]

  constructor(
    private actRoute: ActivatedRoute,
    private dataManager: DataManagerService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Membuat routing untuk setiap individu yang didapat dari id individu tersebut
    const routeParams = this.actRoute.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get("id"));

    this.user = this.userData.find(user => user.id === idFromRoute);

    // Membuat form agar bisa diisi dan di-edit dari data default
    // Dan juga divalidasi sebelum dapat dilakukan update data
    this.form = this.fb.group({
      id: this.user.id,
      namaDepan: [this.user.namaDepan, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      namaBelakang: [this.user.namaBelakang, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      gender: this.user.gender,
      umur: [this.user.umur, [
        Validators.required,
        Validators.min(16),
        Validators.max(65),
      ]],
      penggunaAktif: this.user.penggunaAktif,
      biodata: this.user.biodata
    })
  }

  // Mendapatkan value namaDepan, namaBelakang, dan umur dari form untuk divalidasi
  get namaDepan() {
    return this.form.get('namaDepan')!;
  }

  get namaBelakang() {
    return this.form.get('namaBelakang')!;
  }

  get umur() {
    return this.form.get('umur')!;
  }

  updateUser() {
    // Mencari indeks user tersebut pada userData dari ID lalu mengeksekusi updateUser dari dataManasger
    let idx = this.userData.findIndex(individual => individual.id === this.user.id);
    this.dataManager.updateUser(idx, this.form.value);
    window.alert("Perubahan data user berhasil!");
  }
}
