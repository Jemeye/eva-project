import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public formCreate= new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.formCreate= this.formBuilder.group({
      name: ['', Validators.required],
      grade: ['', [Validators.required]],
      course: ['', [Validators.required]],
    });
  }

  onSubmit(): any {
    console.log(this.formCreate.value)
  }

  loadForm(){
    //aqui se carga el form
    //this.form.patchValue() y ponerlo en el onInit
  }

  back(){
    this.location.back();
  }

}
