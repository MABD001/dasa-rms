import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private jwt!: string | "";

  constructor() { }

  setJwt(token: string) {
    this.jwt = token;
  }

  getJwt(): string {
    return this.jwt;
  }
}
