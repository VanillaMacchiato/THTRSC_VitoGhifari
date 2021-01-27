import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  // Membuat button pada submit-form bisa digunakan ketika form valid
  @Input() formValidity: boolean;
  // Meng-emit ke suatu fungsi pada komponen 'create'
  @Output() successSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
