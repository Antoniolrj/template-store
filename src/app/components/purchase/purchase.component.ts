import { Component, OnInit } from '@angular/core';
import { PayMethod } from 'src/app/models/pay-method';
import { PurchaseService } from 'src/app/services/purchase.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  amount: number = 0
  payMethods: PayMethod[] = []
  payMethodSelected: any

  constructor(
    private storeServices: StoreService,
    private purchaseService: PurchaseService
  ){ }

  ngOnInit() {
    this.amount = this.storeServices.getTotal()
    this.payMethods = this.purchaseService.getAllMethodPay()
  }

  onCheckOut(){
    const payMethodId = this.payMethodSelected
    this.purchaseService.makePurchase(payMethodId, this.amount)
  }
}
