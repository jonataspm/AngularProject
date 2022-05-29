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
  public apiError: boolean = false;

  constructor(private userapiService:UserapiService ) { }

  ngOnInit(): void {
    this.userapiService.userList.subscribe(res=>{
      this.setUserListVar = res
      this.getUserListVar = this.setUserListVar;
       }
    );
  }  
}
