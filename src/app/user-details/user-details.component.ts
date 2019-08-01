import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, UserDetails } from '../api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  singleUser: UserDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private service: ApiService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['term']) {
        this.service.getDetail<UserDetails>('users', params['term']).subscribe(result => {
          this.singleUser = result;
        });
      }
    });
  }

}
