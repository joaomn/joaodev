import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.css'
})
export class LoadingPageComponent {
  isLoading: boolean = true;

  hideLoading() {
    this.isLoading = false;
  }

}
