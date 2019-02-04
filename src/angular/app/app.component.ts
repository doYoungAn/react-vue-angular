import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'angular-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public items: any[] = [];

    constructor(
        private http: Http
    ) {
        console.log('생성자');
    }

    ngOnInit() {
        console.log('앵귤러 시작');
        this.http.get('/static/posts.json')
            .pipe(map(res => res.json()))
            .subscribe((res) => {
                console.log('앵귤러가 받는다', res);
                this.items = res;
            });
    }
}