import { Component, Input } from '@angular/core';
import { PayMethod } from 'src/app/models/pay-method';

@Component({
  selector: 'app-pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.scss']
})
export class PayMethodComponent {

  @Input() payMethod: PayMethod = {
    id: 0,
    title: '',
    image: ''
  }

}
