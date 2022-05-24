import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [UserHeaderComponent,UserSearchComponent, UserListComponent],
  imports: [CommonModule],
  exports:[UserHeaderComponent, UserSearchComponent, UserListComponent]
})
export class SharedModule { }
 