import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateState } from './store/store.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';
  loginState: any = {};

  constructor(private store: Store) {}

  updateState() {
    this.store.dispatch(updateState({ name: "main" }));
    window.location.href = '/example-spa/login';
  }

  getLoginState() {
    if (localStorage.getItem('LOGIN')) {
      this.loginState = localStorage.getItem('LOGIN');
    }
  }
}
