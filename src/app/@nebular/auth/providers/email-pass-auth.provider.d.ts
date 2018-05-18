import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgEmailPassAuthProviderConfig } from './email-pass-auth.options';
import { NbAuthResult } from '../services/auth-result';
import { NbAbstractAuthProvider } from './abstract-auth.provider';


export declare class NbEmailPassAuthProvider extends NbAbstractAuthProvider {
    protected http: HttpClient;
    private route;
    protected defaultConfig: NgEmailPassAuthProviderConfig;
    constructor(http: HttpClient, route: ActivatedRoute);
    authenticate(data?: any): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    logout(): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    protected validateToken(module: string): any;
    protected getActionEndpoint(action: string): string;
}
