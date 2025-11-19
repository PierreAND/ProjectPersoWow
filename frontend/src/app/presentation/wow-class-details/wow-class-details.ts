import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GetClasseById } from '../../application/usecases/wow_classes/getClassById.usecase';
import { ClassDetail } from '../../domain/models/wowClassDetail.model';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wow-class-details.html',
  styleUrl: './wow-class-details.scss',
})
export class ClassDetailComponent implements OnInit {
  classData = signal<ClassDetail | null>(null);

  constructor(
    private route: ActivatedRoute,
    private getClasseById: GetClasseById
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getClasseById.execute(id).subscribe(res => {
      console.log(res)
      this.classData.set(res);
    });
  }
}
