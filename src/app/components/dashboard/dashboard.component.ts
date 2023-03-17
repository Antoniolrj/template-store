import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showOrders = false;
  showMyData = false;
  showHome = false;

  orders = []

  constructor(
    private userService: UserService
  ){}

  ngOnInit(){
    this.showHome = true;
  }

  onShowOrders() {
    this.showOrders = true
    this.showHome = false
    this.showMyData = false
    this.orders = this.userService.getOrders(1)
  }

  onShowMyData() {
    this.showMyData = true
    this.showHome = false
    this.showOrders = false
  }

  onShowHome(){
    this.showHome = true
    this.showMyData = false
    this.showOrders = false
  }

}
