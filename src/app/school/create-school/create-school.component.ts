import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DTOSchool } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css']
})
export class CreateSchoolComponent implements OnInit {

  public formCreate= new FormGroup({});
  private school: DTOSchool = {
    nombre: '',
    ubicacion: ''
  }

  constructor(
    private schoolService: SchoolService,
    private formBuilder: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formCreate= this.formBuilder.group({
      nombre: ['', Validators.required],
      ubicacion: ['', [Validators.required]],
    });
  }

  onSubmit(){
    this.school= this.formCreate.value
    console.log(this.school)
    this.schoolService.createSchool(this.school)
    .subscribe(data =>{
      console.log(data);
      alert('Institución Educativa creada con éxito')
      this.location.back();
     });

  }

  back(){
    this.location.back();
  }

}
