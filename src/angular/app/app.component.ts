import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'angular-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public items: any[] = [];

    constructor(
        private http: Http
    ) {
    }

    ngOnInit() {
        this.http.get('/static/posts.json')
            .pipe(map(res => res.json()))
            .subscribe((res) => {
                this.items = res;
            });
    }
}