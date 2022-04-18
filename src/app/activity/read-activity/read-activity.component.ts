import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Activity } from 'src/app/models/activity.model';
import { DeleteActivityComponent } from '../delete-activity/delete-activity.component';

@Component({
  selector: 'app-read-activity',
  templateUrl: './read-activity.component.html',
  styleUrls: ['./read-activity.component.css']
})
export class ReadActivityComponent implements OnInit {

  public page: number =0;

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

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  delete(){
    const dialogRef = this.dialog.open(DeleteActivityComponent)
  }

}
