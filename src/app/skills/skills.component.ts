import { Component, Input, OnInit } from '@angular/core';
import { Developer } from '../shared/models/developer.model';
import { Skill } from '../shared/models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

@Input() skilled: Skill| undefined



  constructor() { }

  ngOnInit(): void {
  }

}
