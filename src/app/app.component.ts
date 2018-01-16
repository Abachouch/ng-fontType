import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  home = true;
  title = 'ngFonts';
  href: any;

  constructor(private router: Router, private location: Location) {
    this.title = 'hello';
    this.href = this.router.url;
    console.log(this.router.url);

    this.router.events.subscribe(path => {
      if (path instanceof NavigationStart) {

        const s = path.url.split('/')[path.url.split('/').length - 1];

        (s === '') ? this.title = 'ngFonts' : this.title = s;

      }
    });
  }

  back() {
    console.log('back home');
    this.router.navigateByUrl('/');
  }
}
