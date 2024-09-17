import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule.forRoot(APP_ROUTES))]
};
