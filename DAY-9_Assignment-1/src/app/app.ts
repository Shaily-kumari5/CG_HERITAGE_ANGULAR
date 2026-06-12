import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  envData: any;
  apiMessage: string = '';

  constructor(private envService: EnvironmentService) {
    this.envData = this.envService.getEnvironment();
    this.apiMessage = this.envService.getApiMessage();
  }

  getEnvironmentName(): string {

    if (this.envData.production) {
      return 'Production';
    }

    if (this.envData.apiUrl.includes('staging')) {
      return 'Staging';
    }

    return 'Development';
  }

  getBadgeClass(): string {

    if (this.envData.production) {
      return 'prod';
    }

    if (this.envData.apiUrl.includes('staging')) {
      return 'staging';
    }

    return 'dev';
  }

  isFeatureEnabled(feature: string): boolean {
    return this.envService.isFeatureEnabled(feature);
  }
}