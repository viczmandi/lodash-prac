import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {

  arr: Array<Object>;
  newArr: Array<Object>;

  constructor() { 
    this.arr = [
      {icon: 'asd', counter: 1}, 
      {icon: 'dsa', counter: 1}, 
      {icon: 'asdad', counter: 1}, 
      {icon: 'mbnmbnm', counter: 1}, 
      {icon: 'asd', counter: 1}, 
      {icon: 'hgf', counter: 1}, 
      {icon: 'asd', counter: 1},
    ];

    this.newArr = [];
  }

  ngOnInit() {
    this.arr.forEach(element => {
      let obj = _.find(this.newArr, function (obj) { 
        return obj['icon'] == element['icon']; 
      })
      if(obj) {
        _.set(obj, 'counter', obj['counter']+=1);
      } else {
        this.newArr.push(element);
      }
    });

    this.newArr.forEach(element => {
      console.log(element);
    });
    
  }

}
