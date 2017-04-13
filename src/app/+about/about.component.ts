import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.compenent.css']
})
export class AboutComponent implements OnInit {
  private sub: any;
  private id:any;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number


    });
  }
}