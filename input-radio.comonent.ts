import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'input-radio',
  templateUrl: './input-radio.component.html'
})
export class InputRadioComponent implements OnInit {

  @Input()
  userForm: FormGroup;

  @Input()
  fControlName: string;

  days: Array<string> = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm.addControl(this.fControlName, new FormControl(''));
    console.log("input component");
  }

  radioChangeHandler(event){
    console.log(event.target.value);
    this.userForm.get('dia').setValue(event.target.value);
  }

}
