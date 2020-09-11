import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-job',
  templateUrl: './hero-job.component.html',
  styleUrls: ['./hero-job.component.scss']
})
export class HeroJobComponent {
  @Input() data: any;

}
