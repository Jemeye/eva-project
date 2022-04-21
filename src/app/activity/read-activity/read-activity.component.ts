import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity.model';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { ActivityService } from 'src/app/services/activity.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-read-activity',
  templateUrl: './read-activity.component.html',
  styleUrls: ['./read-activity.component.css']
})
export class ReadActivityComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;

  public activities: Activity[] = [
  ]

  constructor(
    private location: Location,
    private activityService: ActivityService

  ) { }

  ngOnInit(): void {
    this.activityService.getAllActivity()
    .subscribe( data => {
      this.activities = data;
      console.log(this.activities)
    })
  }

  delete(id: string){
    var r = confirm("¿Seguro que desea eliminar esta actividad extracurricular?");
    if (r == true) {
        alert("\'codgio de vuelta\'");
        //llamar al http
    }
  }

}
