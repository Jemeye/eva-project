import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-read-school',
  templateUrl: './read-school.component.html',
  styleUrls: ['./read-school.component.css']
})
export class ReadSchoolComponent implements OnInit {

  public page: number =0;
  modalSwitch: boolean = false;

  activities: Activity[] = [
    {
      title: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'primero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'segundo',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'tercero',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'cuarto',
      images: 'https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
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
