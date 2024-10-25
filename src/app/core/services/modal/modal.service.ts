import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isVisible = signal(false);  // Manage modal visibility

  constructor() {}

  // Method to open the modal
  openModal() {
    this.isVisible.set(true);
  }

  // Method to close the modal
  closeModal() {
    this.isVisible.set(false);
  }
}
