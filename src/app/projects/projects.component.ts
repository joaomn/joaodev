import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private translate: TranslateService, private router: Router) {}

}
