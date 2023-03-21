import { Component, Output, EventEmitter, OnInit, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, DoCheck, OnChanges {

  totalPages: number;
  offset: number = 0
  limit: number = 10
  currentPage: number = 1

  @Output() currentPageEmit = new EventEmitter<number>()

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.totalPages = Math.ceil(data.length / this.limit)
    })
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  next(){
    this.currentPage++
    this.offset += this.limit
    this.currentPageEmit.emit(this.offset)
  }

  previous(){
    this.currentPage--
    this.offset -= this.limit
    this.currentPageEmit.emit(this.offset)
  }
}
