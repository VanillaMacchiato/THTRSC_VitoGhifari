import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-update',
  templateUrl: './submit-update.component.html',
  styleUrls: ['./submit-update.component.css']
})
export class SubmitUpdateComponent implements OnInit {
  // Untuk mengaktifkan tombol update berdasarkan sudah/belum dieditnya data individual 
  @Input() formIsPristine: boolean;
  // Agar fungsi updateUser dapat di-call dari event emitter
  @Output() updateForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
