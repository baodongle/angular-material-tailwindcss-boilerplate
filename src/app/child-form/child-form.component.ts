import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss'],
})
export class ChildFormComponent implements OnInit {
  formGroup!: FormGroup;
  formFields: {
    formControlName: string | number | null;
    formState?: any;
    validators?: ValidatorFn | ValidatorFn[] | null;
    config?: {
      type?: string;
      placeholder?: string;
      label?: string;
      fxLayout?: string;
    };
  }[] = [
    {
      formControlName: 'id',
      formState: { value: '', disable: true },
      validators: Validators.required,
      config: {
        placeholder: 'Input Id',
        label: 'Id',
      },
    },
  ];

  constructor() {
    this.formGroup = new FormGroup({ id: new FormControl('', Validators.required) });
  }

  ngOnInit(): void {}
}
