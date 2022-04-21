import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-aggre',
  templateUrl: './create-aggre.component.html',
  styleUrls: ['./create-aggre.component.css']
})
export class CreateAggreComponent implements OnInit {

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

  public season = ['verano', 'invierno', 'primavera','otoño'];
  public frequency = ['1 vez a la semana', '2 veces a la semana', '3 veces a la semana'];
  public schedule = ['mañana', 'tarde', 'noche'];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formCreate= this.formBuilder.group({
      name: ['', Validators.required],
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
  }

  onSubmit(): any {
    console.log(this.formCreate.value)
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
