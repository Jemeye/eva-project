import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-aggre',
  templateUrl: './detail-aggre.component.html',
  styleUrls: ['./detail-aggre.component.css']
})
export class DetailAggreComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back();
  }

}
