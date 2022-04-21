import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-read-student',
  templateUrl: './read-student.component.html',
  styleUrls: ['./read-student.component.css']
})
export class ReadStudentComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;

  activities: Activity[] = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    var r = confirm("¿Seguro que desea eliminar este convenio?");
    if (r == true) {
        alert("\'codgio de vuelta\'");
        //llamar al http
    }
  }
}
