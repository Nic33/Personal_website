import { Component } from '@angular/core';

@Component({
  selector: 'my-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  timeLine = [{ year: '2017', detail: 'Brevet' },
  { year: '2020', detail: 'Bac scientifique option SI à Talence'},
  { year: '2023', detail: 'Licence Informatique à Talence'},
  { year: 'Actuel', detail: "Alternant à l'Enseirb Matmeca de Talence et Eviden à Pessac" },
]
}
