import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity.model';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-read-activity',
  templateUrl: './read-activity.component.html',
  styleUrls: ['./read-activity.component.css']
})
export class ReadActivityComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;

  activities: Activity[] = [
    {
      name: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      name: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
  ]

  constructor(

  ) { }

  ngOnInit(): void {
  }

  delete(){
    var r = confirm("¿Seguro que desea eliminar esta actividad extracurricular?");
    if (r == true) {
        alert("\'codgio de vuelta\'");
        //llamar al http
    }
  }

}
