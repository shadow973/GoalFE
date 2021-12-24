import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareSocialsComponent } from './share-socials/share-socials.component';
import { ShareButtonsConfig } from 'ngx-sharebuttons'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


const customConfig: ShareButtonsConfig = {
  include: ['facebook', 'google', 'whatsapp'],
  theme: 'modern-light',
  gaTracking: true
}

@NgModule({
  declarations: [
    ShareSocialsComponent
  ],
  imports: [
    CommonModule,
    ShareIconsModule,
    ShareButtonsModule.withConfig(customConfig)
  ],
  exports: [
    ShareSocialsComponent
  ]
})
export class ShareSocialsModule { }
