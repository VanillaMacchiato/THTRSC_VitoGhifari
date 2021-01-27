import { Injectable } from '@angular/core';
import { userData } from './data-pengguna';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  userData = userData;
  currentId = userData.length + 1;

  constructor() { }

  getUserData() {
    return userData;
  }

  addUser(data: any) {
    this.userData.push(data);
  }

  incrementId() {
    this.currentId = this.currentId + 1;
  }

  updateUser(idx: number, newUserData: any) {
    userData[idx] = newUserData;
  }
}
