import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetClasses } from '../../application/usecases/wow_classes/getClasses.usecase';
import { Classes } from '../../domain/models/wowClass.model';
import { Observable, forkJoin } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClassImage } from '../../domain/models/wowClassDetail.model';
import { GetImageById } from '../../application/usecases/wow_classes/getImage.usecase';

@Component({
  selector: 'app-wow-classes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wow-classes.html',
  styleUrls: ['./wow-classes.scss'],
})
export class WowClassesComponent implements OnInit {
  classes$!: Observable<Classes[]>;
  classImages = signal<Map<number, ClassImage>>(new Map());

  constructor(
    private getClasses: GetClasses,
    private route: ActivatedRoute,
    private getImage: GetImageById
  ) {}

  ngOnInit(): void {
    this.classes$ = this.getClasses.execute();
    
    this.classes$.subscribe(classes => {
      classes.forEach(classItem => {
        this.getImage.execute(classItem.id).subscribe(img => {
          const currentMap = this.classImages();
          currentMap.set(classItem.id, img);
          this.classImages.set(new Map(currentMap));
        });
      });
    });
  }

  getClassImage(classId: number): ClassImage | undefined {
    return this.classImages().get(classId);
  }
}