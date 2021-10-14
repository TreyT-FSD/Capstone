import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(private _router:Router){}

    /**
     * Checks to see if the user is authorized to navigate to the gaurded route.
     * @param route 
     * @param state 
     * @returns True if the logged in user is an admin.
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // console.log(route.url[0].path);
        // check which url we are coming from
        let urlPath = route.url[0].path;
        if(urlPath === "admin"){
            if(this.isAdmin()){
                return true;
            }
            else{
                this._router.navigate(["admin-login"]);
                return false;
            }
        }
        if(urlPath === "user"){
            if(this.isUser()){
                return true;
            }
            else{
                this._router.navigate(["user-login"]);
                return false;
            }
        }
        return false;
    }

    /**
     * Checks to see if the user is logged in as an admin.
     * @returns True if the user is logged in as an admin otherwise false.
     */
    isAdmin(): boolean {
        let isLoggedIn = false;

        if(sessionStorage.getItem("isAdmin") == 'true'){
            isLoggedIn=true;
        }

        return isLoggedIn;
    }

    /**
     * Removes the isAdmin key from the user's session.
     */
    adminLogout(){
        sessionStorage.removeItem("isAdmin");
        sessionStorage.removeItem("adminId");
        sessionStorage.removeItem("adminUsername");
    }

    isUser(): boolean{
        let isLoggedIn = false;

        if(sessionStorage.getItem("isUser") == 'true'){
            isLoggedIn=true;
        }

        return isLoggedIn;
    }

    userLoguout(){
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("isUser");
    }
}