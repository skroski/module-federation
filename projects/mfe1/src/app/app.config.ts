import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MFE1_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule.forRoot(MFE1_ROUTES))]
};
