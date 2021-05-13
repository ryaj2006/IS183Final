import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  beverage: Object = {};

  constructor(
    private router: Router,
    private beverageService: BeverageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.beverageService.getBeverageById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        this.beverage = resp;
      });
  }

  updateBeverage(beverage: any) {
    const beverageID = beverage.id;
    delete beverage.id;
    this.beverageService.updateBeverage(beverageID, beverage).then((resp) => {
      if (resp) {
        this.router.navigate(['beverages']);
      }
    });
  }
}

  // async ngOnInit() {
  //   this.bookService.getBookById(this.activatedRoute.snapshot.params['id'])
  //     .then((resp) => {
  //       this.book = resp;
  //     });
  // }

  // updateBook(book: any) {
  //   const bookID = book.id;
  //   delete book.id;
  //   this.bookService.updateBook(bookID, book).then((resp) => {
  //     if (resp) {
  //       this.router.navigate(['books']);
  //     }
  //   });
  // }


