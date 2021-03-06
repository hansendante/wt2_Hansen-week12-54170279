import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "shell",
    templateUrl: "shell.component.html",
})
export class ShellComponent {
    constructor(
        private ls: LoginService,
        private router: RouterExtensions,
        private page: Page
    ) {
        page.actionBarHidden = true;
    }
    logout() {
        this.ls.logout();
        this.router.navigate(["login"], { clearHistory: true });
    }
}