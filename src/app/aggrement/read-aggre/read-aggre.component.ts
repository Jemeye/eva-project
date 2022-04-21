import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { DTOAggrenment } from 'src/app/models/aggrement.model';
import { AggrementService } from 'src/app/services/aggrement.service';

@Component({
  selector: 'app-read-aggre',
  templateUrl: './read-aggre.component.html',
  styleUrls: ['./read-aggre.component.css']
})
export class ReadAggreComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;

  public DTOAggrements : DTOAggrenment[] = []

  constructor(
    private location: Location,
    private aggreService: AggrementService
  ) { }

  ngOnInit(): void {
    this.aggreService.getAllAggrementBySchoolID()
    .subscribe(data => {
      this.DTOAggrements = data;
      console.log(data)
    });
  }

  delete(id: string){
    var r = confirm("¿Seguro que desea eliminar este convenio?");
    if (r == true) {
        this.aggreService.deleteAggrement(id)
        .subscribe( data =>
          {
            console.log(data)
            alert("Convenio eliminado correctamente");
            //window.location.reload();
          })
        //llamar al http
    }
  }
}
