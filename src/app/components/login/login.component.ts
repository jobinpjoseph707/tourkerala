import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() showRegister = new EventEmitter<void>();

  onRegisterClick() {
    this.showRegister.emit();
  }
}
