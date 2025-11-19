import { ApplicationConfig } from '@angular/core';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { WowApiService } from './infrastructure/services/wowApi.service';
import { WOW_CLASS_REPOSITORY } from './domain/repositories/IWowClass.repository.interface';
import {  provideHttpClient, withFetch } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    { provide: WOW_CLASS_REPOSITORY, useClass: WowApiService},
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
   provideHttpClient(withFetch()),
  ]
};