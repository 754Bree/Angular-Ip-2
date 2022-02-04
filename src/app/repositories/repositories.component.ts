import { Component, OnInit } from '@angular/core';
import { GetService } from '../get-service/get.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repoitems: any[];
  repoName:string= "django";

  constructor(private GetService: GetService) { 
    
  }

  findRepo () {
    this.GetService.UpdateRepo(this.repoName);
    this.GetService.searchrepos().subscribe(repo => {
     
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
