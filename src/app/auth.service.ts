import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(
    private session: SessionService,
  ) {
  }

  public isSignedIn() {
    return !!this.session.accessToken;
  }

  public doSignOut() {
    this.session.destroy();
    return Observable.of(true);
  }

  public doSignIn(accessToken: string, name: string) {
    if (!accessToken) {
      return Observable.throw('Invalid access token');
    }
    if (!name) {
      return Observable.throw('Invalid name');
    }
    this.session.accessToken = accessToken;
    this.session.name = name;
    return Observable.of(true);
  }

}
