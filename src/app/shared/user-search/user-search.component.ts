import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public search(value:string){
    this.emmitSearch.emit(value);
  }
}
