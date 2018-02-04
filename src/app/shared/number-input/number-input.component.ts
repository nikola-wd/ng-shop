import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() val: number;
  @Input() minDisabled: boolean;
  @Output() valAdd = new EventEmitter<void>();
  @Output() valSub = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onValAdd() {
    this.valAdd.emit();
  }
  onValSub() {
    this.valSub.emit();
  }

}
