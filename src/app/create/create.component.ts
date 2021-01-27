import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // Inisialisasi variabel form untuk dijadikan objek nantinya
  form: FormGroup;

  // Inisialisasi gender untuk form selection
  genders: any[] = [
    { name: 'Pria' },
    { name: 'Wanita' }
  ]

  constructor(
    private fb: FormBuilder,
    private dataManager: DataManagerService
  ) { }

  ngOnInit(): void {
    // Menggunakan FormBuilder untuk membuat form dengan data pengguna baru serta ID baru
    this.form = this.fb.group({
      id: this.dataManager.currentId,
      namaDepan: ['', [
        Validators.required,
        // Nama harus berupa huruf atau spasi
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      namaBelakang: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]+$')
      ]],
      gender: 'Pria',
      umur: [null, [
        Validators.required,
        // Umur harus dalam rentang 16-65 tahun
        Validators.min(16),
        Validators.max(65),
      ]],
      penggunaAktif: false,
      biodata: ''
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

  // Melakukan submit form dengan menambahkan data pada array UserData dari dataManager
  // dengan menambahkan value dari form tersebut, lalu menambahkan ID menjadi ID + 1
  // serta me-reset form dan membuat pop-up
  submitForm() {
    this.dataManager.addUser(this.form.value);
    this.dataManager.incrementId();
    this.form.reset();
    window.alert("Pembuatan user berhasil!");
  }
}
