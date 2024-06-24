import { KeyValuePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KERALA_DISTRICTS } from '../../district-data';


@Component({
  selector: 'app-distritcs',
  standalone: true,
  imports: [NgIf,RouterLink,KeyValuePipe],
  templateUrl: './distritcs.component.html',
  styleUrl: './distritcs.component.scss'
})
export class DistritcsComponent {
KERALA_DISTRICTS = KERALA_DISTRICTS;

}
