import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { DTOActivity } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  public formCreate= new FormGroup({});

  public areas = [
    {
      name: 'deportes',
      subareas: ['atletico','pelota','combate']
    },
    {
      name: 'artes',
      subareas: ['canto','instrumental','danza','teatro','artes plásticas']
    },
    {
      name: 'ciencias sociales',
      subareas: ['lengua castellana e idiomas','política y democracia','obra social']
    },
    {
      name: 'lógica matemática',
      subareas: ['estadística','contabilidad','lógica']
    },
    {
      name: 'tecnología',
      subareas: ['herramientas ofimáticas','herramientas de desarrollo','producción multimedia','emprendimiento']
    },
    {
      name: 'ciencias naturales',
      subareas: ['cuidado ambiental','cuidado animal','experimentación y laboratorio']
    }
];

public choseArea = {
    name: '',
    subareas: ['']
  };

  public schedule = ['mañana', 'tarde', 'noche'];

  private dto : DTOActivity = {
    nombre: '',
    descripcion: '',
    recursos: '',
    horario: '',
    cupos: 0,
    area:'',
    subarea: '',
  }

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    this.formCreate= this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]],
      horario: ['', [Validators.required]],
      area: ['', [Validators.required]],
      subarea: ['', [Validators.required]],
      cupo: ['', [Validators.required]],
      recursos: ['', [Validators.required]],
      // images: ['', [Validators.required]],
    });
//precargar los datos
    //this.loadForm();
  }

  onSubmit(): any {
    this.dto = this.formCreate.value;
    console.log(this.formCreate.value)
    this.activityService.createActivity(this.dto)
    .subscribe( data => {
      console.log(data)
    }

    )
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

  subarea(dato: any){
    const name = dato.target.value;
    for (let area of this.areas){
      if(area.name === name){
        this.choseArea.name = area.name;
        this.choseArea.subareas = area.subareas;
      }
    }
  }

  back(){
    this.location.back();
  }

}
