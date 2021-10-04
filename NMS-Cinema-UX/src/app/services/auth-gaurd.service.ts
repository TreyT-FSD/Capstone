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
        if(this.isAdmin()){
            return true;
        }
        else{
            this._router.navigate(["admin-login"]);
            return false;
        }
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
    }
}