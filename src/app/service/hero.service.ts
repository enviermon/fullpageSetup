import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import { Observable } from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";

@Injectable()
export class HeroSerivce {

    findAll() {
        return Observable.create(observer => {

            let Heroes = HEROES;

            if (Heroes == null) {
                observer.error("Fehler2");
                return;
            }
            observer.next(Heroes);
            observer.complete();
        });
    }

    findOne(id: number) {

        return Observable.create(observer => {

            let hero = HEROES.find(x => x.id === id);

            if (hero == null) {
                observer.error("Fehler2");
                return;
            }
            observer.next(hero);
            observer.complete();
        });
    }
}
