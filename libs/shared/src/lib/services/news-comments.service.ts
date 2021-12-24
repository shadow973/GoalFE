import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsCommentsService {

    constructor(
        private httpService: HttpService
    ) { }

    getComments(newsId: number, p: number, lp: number): Observable<any> {
        return this.httpService.get(`articles/${newsId}/comments`, {
            from: 'web',
            per_page: 10,
            page: p,
            last_page: lp
        });
    }

    postComment(newsId: number, content: string): Observable<any> {
        return this.httpService.post(`articles/${newsId}/comments`, {
            content: content
        });
    }

    editComment(newsId: number, commentId: number, content: string): Observable<any> {
        return this.httpService.put(`articles/${newsId}/comments/${commentId}`, {
            content: content
        });
    }

    deleteComment(newsId: number, commentId: number): Observable<any> {
        return this.httpService.delete(`articles/${newsId}/comments/${commentId}`);
    }

    likeComment(commentId: number): Observable<any> {
        return this.httpService.post(`comments/like/${commentId}`, {});
    }

    unlikeComment(commentId: number): Observable<any> {
        return this.httpService.post(`comments/unlike/${commentId}`, {});
    }

    // Replies
    getCommentReplies(newsId: number, commentId: number): Observable<any> {
        return this.httpService.get(`articles/${newsId}/comments/${commentId}/replies`);
    }

    postCommentReply(newsId: number, commentId: number, content: string): Observable<any> {
        return this.httpService.post(`articles/${newsId}/comments/${commentId}/replies`, {
            content: content
        });
    }

    editCommentReply(newsId: number, commentId: number, replCommentId: number, content: string): Observable<any> {
        return this.httpService.put(`articles/${newsId}/comments/${commentId}/replies/${replCommentId}`, {
            content: content
        });
    }

    deleteCommentReply(newsId: number, commentId: number, replCommentId: number): Observable<any> {
        return this.httpService.delete(`articles/${newsId}/comments/${commentId}/replies/${replCommentId}`);
    }

    likeCommentReply(commentId: number): Observable<any> {
        return this.httpService.post(`replies/like/${commentId}`, {});
    }

    unlikeCommentReply(commentId: number): Observable<any> {
        return this.httpService.post(`replies/unlike/${commentId}`, {});
    }
}
