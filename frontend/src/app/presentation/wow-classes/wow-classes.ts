import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetClasses } from '../../application/usecases/wow_classes/getClasses.usecase';
import { Classes } from '../../domain/models/wowClass.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-wow-classes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wow-classes.html',
  styleUrls: ['./wow-classes.scss'],
})
export class WowClassesComponent implements OnInit {
  classes$!: Observable<Classes[]>;

  

  

  constructor(
    private getClasses: GetClasses ,
  
  ) {}


  ngOnInit(): void {
    this.classes$ = this.getClasses.execute();
   
  }

}