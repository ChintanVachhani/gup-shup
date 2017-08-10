import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ErrorService} from "../error/error.service";
import {AppEnvironment} from "../app.environment";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(AppEnvironment.SERVER_ADDRESS + '/user', body, {headers: header})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(AppEnvironment.SERVER_ADDRESS + '/user/signin', body, {headers: header})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout(){
        sessionStorage.clear();
    }

    isLoggedIn(){
        return sessionStorage.getItem('token') !== null;
    }
}