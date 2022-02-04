import { Component, OnInit } from '@angular/core';
import { GetService } from '../get-service/get.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = '754Bree'
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private GetService: GetService) { 
    
  }


  findUser () {
    this.GetService.UpdateUser(this.username);

    this.GetService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.GetService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}