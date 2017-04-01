import {AfterViewInit, Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MnFullpageDirective} from "./fullpagetest/mnFullpage.directive";
import {Hero} from "./service/hero";
import {HeroSerivce} from "./service/hero.service";
import {User} from "./service/user";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges{
  @ViewChild(MnFullpageDirective) vc:MnFullpageDirective;

  heroes: Hero[];
  private anyErrors: any;
  users = [
    new User('Mahesh', 0),
    new User('Mahesh', 2)
  ];
  constructor(private heroService: HeroSerivce){}

  ngOnChanges(): void {
    console.log("appcomponent ngOnChanges");
  }

  ngAfterViewInit(): void {
    console.log("appcomponent ngAfterViewInit");
    this.vc.callme();

  }

  ngOnInit(): void {
    this.getHeroes();
    console.log("appcomponent ngOnInit");
  }

  getHeroes():void {
    this.heroService.findAll().subscribe(
        hero => this.heroes = hero,
        error => this.anyErrors = error
    );

  }
}
