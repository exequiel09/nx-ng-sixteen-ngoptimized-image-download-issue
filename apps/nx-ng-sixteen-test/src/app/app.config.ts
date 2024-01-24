import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getRemoteConfig,
  provideRemoteConfig,
} from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      provideFirebaseApp(() => {
        return initializeApp({
          // TODO add project here
          apiKey: '',
          appId: '',
          projectId: '',
        });
      })
    ),
    importProvidersFrom(
      provideRemoteConfig(() => {
        const remoteConfig = getRemoteConfig();

        return remoteConfig;
      })
    ),
  ],
};
