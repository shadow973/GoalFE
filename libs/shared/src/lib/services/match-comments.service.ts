import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MatchCommentsService {

    constructor(
        private httpService: HttpService
    ) { }

    getComments(matchId: number, p: number, lp: number): Observable<any> {
        return this.httpService.get(`match/${matchId}/comments`, {
            from: 'web',
            per_page: 10,
            page: p,
            last_page: lp
        });
    }

    postComment(matchId: number, content: string): Observable<any> {
        return this.httpService.post(`match/${matchId}/comments`, {
            content: content
        });
    }

    editComment(matchId: number, commentId: number, content: string): Observable<any> {
        return this.httpService.put(`match/${matchId}/comments/${commentId}`, {
            content: content
        });
    }

    deleteComment(matchId: number, commentId: number): Observable<any> {
        return this.httpService.delete(`match/${matchId}/comments/${commentId}`);
    }

    likeComment(commentId: number): Observable<any> {
        return this.httpService.post(`matchcomments/like/${commentId}`, {});
    }

    unlikeComment(commentId: number): Observable<any> {
        return this.httpService.post(`matchcomments/unlike/${commentId}`, {});
    }

    // Replies
    getCommentReplies(matchId: number, commentId: number): Observable<any> {
        return this.httpService.get(`match/${matchId}/comments/${commentId}/replies`);
    }

    postCommentReply(matchId: number, commentId: number, content: string): Observable<any> {
        return this.httpService.post(`match/${matchId}/comments/${commentId}/replies`, {
            content: content
        });
    }

    editCommentReply(matchId: number, commentId: number, replCommentId: number, content: string): Observable<any> {
        return this.httpService.put(`match/${matchId}/comments/${commentId}/replies/${replCommentId}`, {
            content: content
        });
    }

    deleteCommentReply(matchId: number, commentId: number, replCommentId: number): Observable<any> {
        return this.httpService.delete(`match/${matchId}/comments/${commentId}/replies/${replCommentId}`);
    }

    likeCommentReply(commentId: number): Observable<any> {
        return this.httpService.post(`matchreplies/like/${commentId}`, {});
    }

    unlikeCommentReply(commentId: number): Observable<any> {
        return this.httpService.post(`matchreplies/unlike/${commentId}`, {});
    }
}
