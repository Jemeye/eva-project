import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public formUpdate= new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.formUpdate= this.formBuilder.group({
      name: ['',],
      grade: ['', [Validators.required]],
      course: ['', [Validators.required]],
    });
  }

  onSubmit(): any {
    console.log(this.formUpdate.value)
  }

  loadForm(){
    //aqui se carga el form
    //this.form.patchValue() y ponerlo en el onInit
  }

  back(){
    this.location.back();
  }

}
