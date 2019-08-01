import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService, PagerEvent, RequestParams, User} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('search', {static: true}) search!: ElementRef;
  readonly headerHeight = 30;
  readonly footerHeight = 50;
  readonly rowHeight = 91;
  readonly pSize = 5;
  total = 300;
  rows: User[] = [];
  loadingIndicator = true;
  searchRequest: RequestParams;

  constructor(private service: ApiService,
              private router: Router) {
    this.searchRequest = {
      per_page: this.pSize,
      page: 0,
      since: 0
    };
  }

  ngOnInit() {
    this.getList(this.searchRequest);
  }

  onPageChanged(event: PagerEvent) {
    this.searchRequest = {
      per_page: this.pSize,
      since: (event.page - 1) * this.pSize
    };
    this.getList(this.searchRequest);
  }

  getList(request: RequestParams) {
    this.service.get<User[]>('users', request).subscribe(result => {
      this.rows = result;
      this.loadingIndicator = false;
    }, error => this.loadingIndicator = false);
  }

  onActivate(event) {
    if (event.type === 'click') {
      this.router.navigate(['user', event.row.login]);
    }
  }

}
