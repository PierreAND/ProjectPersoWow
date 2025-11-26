import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpeDetails } from '../../domain/models/wowSpecializationDetails';
import { GetSpecializationbyId } from '../../application/usecases/wow_classes/getSpecialization.usecase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wow-specialization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wow-specialization.html',
  styleUrl: './wow-specialization.scss',
})
export class WowSpecialization implements OnInit {
  speData = signal <SpeDetails | null>(null);
  
  constructor(
    private route: ActivatedRoute,
    private getSpecializationbyId : GetSpecializationbyId
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getSpecializationbyId.execute(id).subscribe(res => {
      console.log(res)
      this.speData.set(res)
    })
  }
}
