import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() detailContent = new EventEmitter<{
    nameInput: string;
    amountInput: number;
  }>();
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    this.detailContent.emit({
      nameInput: this.nameInput.nativeElement.value,
      amountInput: this.amountInput.nativeElement.value,
    });
  }
}
