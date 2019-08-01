import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export type PathName = 'users';

export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: number;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UserDetails {
  avatar_url: string;
  bio: any;
  blog: string;
  company: string;
  created_at: any;
  email: any;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: number;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  updated_at: any;
  url: string;
}

export interface RequestParams {
  per_page?: number;
  page?: number;
  since?: string | number;
}

export interface PagerEvent {
  page: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  get<T>(pathName: PathName, request?: RequestParams): Observable<T> {
    if (request) {
      return this.http.get<T>(this.url + pathName, {
        params: Object.entries(request).reduce(
          (params, [key, value]) => params.set(key, value), new HttpParams())
      });
    } else {
      return this.http.get<T>(this.url + pathName);
    }
  }

  getDetail<T>(pathName: PathName, detail: string): Observable<T> {
    return this.http.get<T>(this.url + pathName + '/' + detail);
  }
}
