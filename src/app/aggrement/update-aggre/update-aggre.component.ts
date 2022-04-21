import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Aggrement, DTOCreateAggrenment } from 'src/app/models/aggrement.model';
import { AggrementService } from 'src/app/services/aggrement.service';

@Component({
  selector: 'app-update-aggre',
  templateUrl: './update-aggre.component.html',
  styleUrls: ['./update-aggre.component.css']
})
export class UpdateAggreComponent implements OnInit {

  public formUpdate= new FormGroup({});

  public aggre : Aggrement = {
    _id:{
      $oid: ''
    },
    nombre: '',
    descripcion: '',
    horario: '',
    ubicacion: '',
    area: '',
    subarea: '',
    costo: 0,
    recursos: '',
    frecuencia: '',
    temporada: '',
  }

  private aggreDto: DTOCreateAggrenment = {
    nombre: '',
    descripcion: '',
    horario: '',
    ubicacion: '',
    area: '',
    subarea: '',
    costo: 0,
    recursos: '',
    frecuencia: '',
    temporada: '',
  }

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

  private id: string | null = '';

  public season = ['verano', 'invierno', 'primavera','otoño'];
  public frequency = ['1 vez a la semana', '2 veces a la semana', '3 veces a la semana'];
  public schedule = ['mañana', 'tarde', 'noche'];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private _activeRouter: ActivatedRoute,
    private aggreService: AggrementService
  ) { }

  ngOnInit(): void {
    this.formUpdate= this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]],
      horario: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      area: ['', [Validators.required]],
      subarea: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      recursos: ['', [Validators.required]],
      frecuencia: ['', [Validators.required]],
      temporada: ['', [Validators.required]],
      // images: ['', [Validators.required]],
    });

    if(this._activeRouter.snapshot.paramMap.get('id') != null){
      this.id = this._activeRouter.snapshot.paramMap.get('id');
      this.aggreService.getAggrementById(this.id)
      .subscribe (data => {
        this.aggre = data;
        console.log(this.aggre)
        this.loadForm();
      })

    }
  }

  onSubmit(): any {
    this.aggreDto = this.formUpdate.value
    this.aggreService.updateAggrement(this.id, this.aggreDto)
    .subscribe( data => {
      console.log(data)
      alert('Convenio Actualizado');
      this.location.back();

    })
  }

  loadForm(){
    this.formUpdate.patchValue(this.aggre);
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
