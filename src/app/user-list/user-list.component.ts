import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
    animations: [
        trigger('userState', [
            state('inactive', style({
                height: 0
            })),
            state('active', style({
                height: 200
            })),
            transition('inactive => active', animate('1s 1000ms ease-in')),
            transition('active => inactive', animate('1s 1000ms ease-out'))
        ])
    ]
})
export class UserListComponent implements OnInit {

  constructor() { }
  users:object[] = [
      {
          'id':1,
          'name':'Demo 1',
          'email':'demo1@web3box.com',
          'state': 'inactive'
      },
      {
          'id':2,
          'name':'Demo 2',
          'email':'demo2@web3box.com',
          'state': 'inactive'
      },
      {
          'id':3,
          'name':'Demo 3',
          'email':'demo3@web3box.com',
          'state': 'inactive'
      },
      {
          'id':4,
          'name':'Demo 4',
          'email':'demo4@web3box.com',
          'state': 'inactive'
      },
      {
          'id':5,
          'name':'Demo 5',
          'email':'demo5@web3box.com',
          'state': 'inactive'
      }
  ];
  activeUser:any;
  ngOnInit() {
  }

}
