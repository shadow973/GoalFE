import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsService {

    constructor(
        private httpService: HttpService
    ) { }

    getHomeMainNews(): Observable<any> {
        return this.httpService.get('articles', {
            options: 'paginate',
            category_id: 2,
            per_page: 5,
            page: 1
        });
    }

    getMatchNews(): Observable<any> {
        return this.httpService.get('articles', {
            options: 'paginate',
            match_news: 1,
            per_page: 5,
            page: 1,
            clear_cache: 1
        });
    }

    getHomeTopRatedNews(): Observable<any[]> {
        return this.httpService.get('articles/todayviews');
    }

    getNewsByCategory(page: number, catId: number, perPage = 25): Observable<any> {
        return this.httpService.get('articles', {
            options: 'paginate',
            category_id: catId,
            per_page: perPage,
            page: page
        });
    }

    getSidebarNews(page: number, perPage: number = 10): Observable<any> {
        return this.httpService.get('articles', {
            minimal: true,
            options: 'paginate',
            category_id: 1,
            per_page: perPage,
            page: page
        });
    }

    getFullNewsById(id: number): Observable<any> {
        return this.httpService.get(`articles/${id}`);
    }

    getAllNews(p: number): Observable<any> {
        return this.httpService.get('articles', {
            options: 'paginate',
            page: p
        });
    }

    getVideos(p: number): Observable<any> {
        return this.httpService.get('articles', {
            options: 'paginate',
            category_id: 82,
            page: p
        });
    }

    getNewsCategoryInfo(id: number): Observable<any> {
        return this.httpService.get(`categories/${id}`, {
            options: 'paginate',
            page: 1
        });
    }
}
