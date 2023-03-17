import { Injectable } from '@angular/core';
import { PayMethod } from '../models/pay-method';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  payMethods: PayMethod[] = [
    {
      id: 1,
      title: 'PayPal',
      image: 'https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal.png',
    },
    {
      id: 2,
      title: 'Transferencia',
      image: 'https://eadcinmobiliaria.es/wp-content/uploads/2018/01/es-transferencia-bancaria-1170x0-c-center.png',
    },
    {
      id: 3,
      title: 'Bizum',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bizum.svg/2560px-Bizum.svg.png',
    },
    {
      id: 4,
      title: 'Stripe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png',
    }
  ]

  constructor() { }

  getAllMethodPay(){
    return this.payMethods
  }

  makePurchase(payMethodId: number, amount: number){
    switch(payMethodId){
      case 1:
        return 'Método de pago seleccionado PAYPAL'
        //Redirigir a
      case 2:
        return 'Método de pago seleccionado TRANSFERENCIA'
      case 3:
        return 'Método de pago seleccionado BIZUM'
      case 4:
        //Stripe

        const paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Stripe token generated!');
          },
        });

        paymentHandler.open({
          name: 'Positronx',
          description: '3 widgets',
          amount: amount * 100,
        })
        return 'Stripe method';

      default:
        return 'Método no valido'
    }
  }
}
