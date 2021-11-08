import { Component, OnInit } from '@angular/core';
import { Developer } from '../shared/models/developer.model';
import { Skill } from '../shared/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer | undefined 

  constructor() { 
  
  }

  ngOnInit(): void {
    this.developer = new Developer('boudjemai','karim',20,'male','bonjour',[
      new Skill('js','chop ton job','karim.fr')
    ])
  }

}
