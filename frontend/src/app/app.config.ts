import { ApplicationConfig } from '@angular/core';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { WowApiService } from './infrastructure/services/wowApi.service';
import { WOW_CLASS_REPOSITORY } from './domain/repositories/IWowClass.repository.interface';
import { SPE_CLASS_REPOSITORY } from './domain/repositories/IWowSpe.repository'; 
import {  provideHttpClient, withFetch } from '@angular/common/http';
import { SpecialisationRepository } from './infrastructure/repositories/speWow/speWow.repository';
import { GetSpecializationbyId } from './application/usecases/wow_classes/getSpecialization.usecase';
import { GetSpecialisationbyId } from './application/usecases/wow_specialisation/getSpecialisationDetailsById.usecase';



export const appConfig: ApplicationConfig = {
  providers: [
    { provide: WOW_CLASS_REPOSITORY, useClass: WowApiService},
    {provide: SPE_CLASS_REPOSITORY, useClass: SpecialisationRepository},
     GetSpecialisationbyId, 
    GetSpecializationbyId,
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
   provideHttpClient(withFetch()),
  ]
};