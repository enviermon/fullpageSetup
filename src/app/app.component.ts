import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {User} from "./user";
import {MnFullpageDirective} from "./fullpagetest/mnFullpage.directive";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges{
  @ViewChild(MnFullpageDirective) vc:MnFullpageDirective;

  ngOnChanges(): void {
    console.log("appcomponent ngOnChanges");
  }

  users = [
    new User('Mahesh', 0),
    new User('Test', 2)

  ];

  ngAfterViewInit(): void {
    console.log("appcomponent ngAfterViewInit");
    this.vc.callme();
  }
  ngOnInit(): void {

    console.log("appcomponent ngOnInit");
  }
}
