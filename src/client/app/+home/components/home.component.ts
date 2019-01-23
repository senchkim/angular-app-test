import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

import {NameListService} from '../../shared/index';

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class HomeComponent {
  constructor(public nameListService: NameListService) {}
}
