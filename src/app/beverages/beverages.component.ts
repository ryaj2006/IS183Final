import { Component, OnInit } from '@angular/core';
import { BeverageService } from './beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: Array<Object> = [];

  constructor(private router: Router, 
    private beverageService: BeverageService) {
  }

   ngOnInit() {
    this.beverages = [];  
    this.getBeverages();
  }

  // async getBeverages() {
  //   const resp = await this.beverageService.getBeverages();
  //   this.beverages = resp;
  // }

  getBeverages() {
    this.beverageService.getBeverages().then((resp) => {
      this.beverages = resp;
    });
  }

  goToCreate() {
    this.router.navigate(['beverage-create']);
  }

  deleteBeverage(id: string) {
    this.beverageService.deleteBeverage(id).then((resp) => {
      if (resp) {
        this.beverages = this.beverages.filter((beverages) => {
          return beverages['id'] != id;
        });
      }
    });
  }



}
