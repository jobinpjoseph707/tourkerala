import { Component } from '@angular/core';
import { LoginComponent } from "../../components/login/login.component";
import { SignupComponent } from "../../components/signup/signup.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [LoginComponent, SignupComponent]
})
export class ContactComponent {
    showLogin: boolean = true;

    toggleForm() {
        this.showLogin = !this.showLogin;
    }

}
