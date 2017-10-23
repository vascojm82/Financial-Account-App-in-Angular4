import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers } from "@angular/http";

@Injectable()
export class DataService {
  accounts = [
    {
      "id": "AAA - 0029",
      "cash_onhand": 39160334.42,
      "cash_yesterday": 31435.87
    },
    {
      "id": "IRA - 0146",
      "cash_onhand": 15884302.39,
      "cash_yesterday": 7430.83
    },
    {
      "id": "AAA - 1812",
      "cash_onhand": 2010926.10,
      "cash_yesterday": 38881.63
    },
    {
      "id": "REG - 2019",
      "cash_onhand": 13465679.34,
      "cash_yesterday": 0.00
    },
    {
      "id": "AAA - 3810",
      "cash_onhand": 10050054.07,
      "cash_yesterday": 8916.69
    },
    {
      "id": "IRA - 5200",
      "cash_onhand": 5763.36,
      "cash_yesterday": 8916.69
    }
  ];

  allAccountsCount : number;
  aSynchPass: boolean;

  constructor(public http:Http) {
    console.log('Data service connected...');
  }

  getAccounts() {
    this.allAccountsCount = this.accounts.length;
    this.aSynchPass = false;

    return new Promise((resolve, reject) => {
      this.aSynchPass = !this.aSynchPass;

      if(this.aSynchPass)
        resolve(this.accounts);
      else
        reject('error');
    });
  }

  getAccountsCount() {
    this.aSynchPass = false;

    return new Promise((resolve, reject) => {
      this.aSynchPass = !this.aSynchPass;

      if(this.aSynchPass)
        resolve(this.allAccountsCount);
      else
        reject('error');
    });
  }
}
