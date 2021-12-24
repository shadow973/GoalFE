import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnersComponent } from './features/partners/partners.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    data: { key: 'home' }
  },
  {
    path: 'search/:q/:page',
    loadChildren: () => import('./features/search-result/search-result.module').then(m => m.SearchResultModule),
    data: { key: 'search' }
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
    data: { key: 'user' }
  },
  {
    path: 'news/:id/:slug',
    loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule),
    data: { key: 'news' }
  },
  {
    path: 'cxrilebi',
    loadChildren: () => import('./features/statistics-page/statistics-page.module').then(m => m.StatisticsPageModule),
    data: { key: 'statistics-page' }
  },
  {
    path: 'club/:id/:slug/:page',
    loadChildren: () => import('./features/club/club.module').then(m => m.ClubModule),
    data: { key: 'club' }
  },
  {
    path: 'championship/:id/:slug/:page',
    loadChildren: () => import('./features/championship/championship.module').then(m => m.ChampionshipModule),
    data: { key: 'championship' }
  },
  {
    path: 'category/:id/:slug/:page',
    loadChildren: () => import('./features/category/category.module').then(m => m.CategoryModule),
    data: { key: 'category' }
  },
  {
    path: 'day-news/:page',
    loadChildren: () => import('./features/day-news/day-news.module').then(m => m.DayNewsModule),
    data: { key: 'day-news' }
  },
  {
    path: 'videos/:page',
    loadChildren: () => import('./features/videos/videos.module').then(m => m.VideosModule),
    data: { key: 'videos' }
  },
  {
    path: 'livescore',
    loadChildren: () => import('./features/livescores/livescores.module').then(m => m.LivescoresModule),
    data: { key: 'livescore' }
  },
  {
    path: 'match/:id',
    loadChildren: () => import('./features/match/match.module').then(m => m.MatchModule),
    data: { key: 'match' }
  },
  {
    path: 'player/:id/:slug/:page',
    loadChildren: () => import('./features/player/player.module').then(m => m.PlayerModule),
    data: { key: 'player' }
  },
  {
    path: 'my-teams',
    loadChildren: () => import('./features/my-teams/my-teams.module').then(m => m.MyTeamsModule),
    data: { key: 'my-teams' }
  },
  {
    path: 'ads',
    loadChildren: () => import('./features/ads/ads.module').then(m => m.AdsModule),
    data: { key: 'ads' }
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule),
    data: { key: 'contact' }
  },
  {
    path: 'partners',
    component: PartnersComponent,
    data: { key: 'partners' }
  },
  {
    path: 'about-us',
    loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule),
    data: { key: 'about-us' }
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./features/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
    data: { key: 'privacy-policy' }
  },
  { path: 'all-news', redirectTo: 'category/1/akhali-ambebi/1', pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { key: 'not-found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
