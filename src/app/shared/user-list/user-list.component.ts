import { UserapiService } from './../../service/userapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public getUserListVar:any;
  private setUserListVar :any;
  constructor(private userapiService:UserapiService ) { }

  ngOnInit(): void {
    this.userapiService.userList.subscribe(res=>{
      this.setUserListVar = res
      this.getUserListVar = this.setUserListVar;
       }
    );
  }
  public getUser(value: string){
    this.userapiService.getUsername(value);
    this.userapiService.user.subscribe(res=>{
      console.log(res),
      this.getUser = this.getUserListVar = res}
      );
  }
 /* public getSearch(value: string){
    const filter = this.getUserListVar.filter((res: any ) => {
      return !res.login.indexOf(value.toLowerCase());
    });
    this.getSearch = filter; 
  }*/
  
}
