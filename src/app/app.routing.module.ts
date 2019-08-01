import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'users',
      pathMatch: 'full'
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'user/:term',
      component: UserDetailsComponent
    }
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule {}
