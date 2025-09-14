import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const authInterceptor : HttpInterceptorFn = (req :HttpRequest<any>,next :HttpHandlerFn):Observable<HttpEvent<any>>=>{
    const token = localStorage.getItem('authToken');
    let authReq : HttpRequest<unknown> = req
    if(token){
        authReq = req.clone({
            setHeaders :{
                Authorization  : `Bearer ${token}`
            }
        })
        return next(authReq)
    }
    return next(req);
}