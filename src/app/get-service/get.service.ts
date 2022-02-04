import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GetService {
  username: string = "lelsey159";
  repoName: string =  "gitsearch";
  clientId: string = "e83385f3bb03d3f78965";
  clientSecret: string = "07dc5df25fcd096bea66f2022fe2879ce2720526";
  apikey:string='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';

  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}