import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  public formCreate= new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formCreate= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms: ['', [Validators.required, Validators.requiredTrue]]
    });
//precargar los datos
    this.loadForm();
  }

  send(): any {
    console.log(this.formCreate.value)
  }

  //forma de cargar datos en el form

  loadForm(): any {
    const response = {
      email: 'jenifer.medina@gmail.com',
      password: '233455',
      terms: 'true'
    };
    this.formCreate.patchValue(response)
  }

}
