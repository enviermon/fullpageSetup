import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MnFullpageDirective} from "../fullpagetest/mnFullpage.directive";
import {Hero} from "../service/hero";
import {HeroSerivce} from "../service/hero.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MnFullpageDirective) vc:MnFullpageDirective;

  heroes: Hero[];
  private anyErrors: any;

  constructor(private heroService: HeroSerivce) { }

  ngOnInit() {
    this.getHeroes();
  }

  ngAfterViewInit(): void {
     this.vc.callme();

  }

  getHeroes():void {
    this.heroService.findAll().subscribe(
        hero => this.heroes = hero,
        // error => this.anyErrors = error
    );

  }
}