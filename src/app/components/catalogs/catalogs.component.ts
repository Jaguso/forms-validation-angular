import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService
      .getAccounts()
      .subscribe((response) => {
        console.log(response["response"])
      });
  }

}
