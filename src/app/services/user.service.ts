import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getOrders(id: number){
    return [
      {
        id: 1,
        user: {
          id: 1,
          name: 'Antonio Luis'
        },
        products: [
          {
            id: 1,
            title: 'Play 5',
            price: 500,
            images: [],
            description: 'Play stration 5 limited edition',
            category: 'games',
            qty: 1
          }
        ]
      },
      {
        id: 2,
        user: {
          id: 1,
          name: 'Antonio Luis'
        },
        products: [
          {
            id: 4,
            title: 'Xbox Serie S',
            price: 350,
            images: [],
            description: 'XBOX SERIE S LE',
            category: 'games',
            qty: 2
          }
        ]
      },

    ]
  }
}
