import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private environment: any;

  constructor(
    private meta: Meta,
    @Inject('env') env: any
  ) {
    this.environment = env;
  }

  generateTags(config) {
    // default values
    const tempConfig = {
      title: 'Goal.Ge - ფეხბურთი',
      description: 'Goal.Ge - ფეხბურთი',
      image: `${this.environment.domain}/assets/img/share_image.png`,
      slug: this.environment.domain,
      ...config,
    };

    this.meta.updateTag({
      name: 'description',
      content: tempConfig.description,
    });
    this.meta.updateTag({ property: 'og:locale', content: 'ka_GE' });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:site_name',
      content: tempConfig.title,
    });
    this.meta.updateTag({ property: 'og:title', content: tempConfig.title });
    this.meta.updateTag({
      property: 'og:description',
      content: tempConfig.description,
    });
    this.meta.updateTag({ property: 'og:image', content: tempConfig.image });
    this.meta.updateTag({
      property: 'og:url',
      content: `${this.environment.domain}/${tempConfig.slug}`,
    });
  }
}
