import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast } from '../../services/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class ToastComponent {

  message = '';

  constructor(private toastService: Toast) {

    this.toastService.toastMessage.subscribe(message => {
      this.message = message;
    });

  }

}