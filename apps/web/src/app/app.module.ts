import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { PromotionModule } from '@goal-front/promotion';
import { HeaderModule } from './features/header/header.module';
import { FooterModule } from './features/footer/footer.module';
import { CustomRouteReuseStrategy } from '@goal-front/shared';
import { RouteReuseStrategy } from '@angular/router';
import { PrebootModule } from 'preboot';
import { DOCUMENT, isPlatformBrowser, ɵgetDOM } from '@angular/common';
import { ModalService } from './services/modal.service';
import { PartnersComponent } from './features/partners/partners.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, PartnersComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    PromotionModule,
    HeaderModule,
    FooterModule,
    ServiceWorkerModule.register('ngsw-worker.js?v=6.5', { enabled: environment.production }),
    BrowserTransferStateModule,
    PrebootModule.withConfig({ appRoot: 'app-root', replay: true, disableOverlay: true }),
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment,
    },
    {
      provide: 'MODAL_SERVICE',
      useClass: ModalService,
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('636573253770771'),
          },
          // {
          //   id: GoogleLoginProvider.PROVIDER_ID,
          //   provider: new GoogleLoginProvider(
          //     'cliend_id'
          //   )
          // }
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: function (document: HTMLDocument, platformId: any) {
        return () => {
          if (isPlatformBrowser(platformId)) {
            const dom = ɵgetDOM();
            const styles = Array.prototype.slice.apply(document.querySelectorAll('style[ng-transition]'));
            styles.forEach(el => {
              // Remove ng-transition attribute to prevent Angular appInitializerFactory
              // to remove server styles before preboot complete
              el.removeAttribute('ng-transition');
            });
            document.addEventListener('PrebootComplete', () => {
              // After preboot complete, remove the server scripts
              setTimeout(() => styles.forEach(el => dom.remove(el)));
            });
          }
        };
      },
      deps: [DOCUMENT, PLATFORM_ID],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
