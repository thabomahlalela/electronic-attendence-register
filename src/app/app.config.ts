import { APP_INITIALIZER, ApplicationConfig, EnvironmentInjector, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, runInInjectionContext } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

export function redirectToLoginOnRefresh(envInjector : EnvironmentInjector) : () =>  void {
  return () =>{
    runInInjectionContext(envInjector,()=> {
       const navigationTrigger = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming ;
       const isPageRefresh = navigationTrigger?.type === 'reload';
      if(isPageRefresh){
      localStorage.clear();
       const router = inject(Router);
       setTimeout(()=> router.navigate(['']))

    }
    })
   
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    
  {
   provide : APP_INITIALIZER,useFactory : redirectToLoginOnRefresh,deps : [EnvironmentInjector],multi : true
  }

  ]
};
// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withComponentInputBinding()
//  , withRouterConfig ({paramsInheritanceStrategy: 'always'})),provideHttpClient()]
// };
