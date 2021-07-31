import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: any = null;

  @Output()
  changeInChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked() {
    this.changeInChild.emit("Hi, from child component");
  }

}
