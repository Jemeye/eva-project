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
      name: ['',],
      description: ['', [Validators.required]],
      schedule: ['', [Validators.required]],
      location: ['', [Validators.required]],
      area: ['', [Validators.required]],
      subarea: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      resources: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
      season: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
//precargar los datos
    //this.loadForm();
  }

  onSubmit(): any {
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
