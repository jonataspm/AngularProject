import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  name:string = 'TryAgainMyDear';
  
  constructor() { }

  ngOnInit(): void {
  }
  public getName(event: any) {
    this.name = event.target.value;
  }
}
