import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  getEnvironment() {
    return environment;
  }

  isFeatureEnabled(featureName: string): boolean {
    return environment.featureFlags[
      featureName as keyof typeof environment.featureFlags
    ];
  }

  getApiMessage(): string {

    if (environment.production) {
      return 'Connected to Production API';
    }

    if (environment.apiUrl.includes('staging')) {
      return 'Connected to Staging API';
    }

    return 'Connected to Development API';
  }
}