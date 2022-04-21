import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-read-school',
  templateUrl: './read-school.component.html',
  styleUrls: ['./read-school.component.css']
})
export class ReadSchoolComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;


  public schools: School[] = [];

  constructor(
    private schoolService: SchoolService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.schoolService.getAllSchool()
    .subscribe(data =>{
      this.schools = data;
      console.log(this.schools);
     });
  }

  delete(id: string){
    var r = confirm("¿Seguro que desea eliminar este convenio?");
    if (r == true) {
        this.schoolService.deleteSchool(id)
        .subscribe(data =>{
          console.log(data)
          alert("Institución educativa eliminada");
        })
    }
    window.location.reload();
  }


}
