import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { UserapiService } from 'src/app/service/userapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlUser : string = 'https://api.github.com/users';
  public user: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userapiService:UserapiService
    ) { }

  ngOnInit(): void {
    this.getUser;
  }

    get getUser(){
      const login = this.activatedRoute.snapshot.params['login'];
      console.log(login);
      const user = this.userapiService.apiGetUser(`${this.urlUser}/${login}`);
      const repos = this.userapiService.apiGetUser(`${this.urlUser}/${login}/repos`);

      return forkJoin([user,repos]).subscribe(
        res => {
          this.user = res;
          this.isLoading = true;
        }
      );  
    }
}
