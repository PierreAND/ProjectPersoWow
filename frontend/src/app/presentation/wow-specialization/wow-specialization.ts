import { Component, OnInit, signal, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpeDetails } from '../../domain/models/wowSpecializationDetails';
import { GetSpecializationbyId } from '../../application/usecases/wow_classes/getSpecialization.usecase';
import { GetSpecialisationbyId } from '../../application/usecases/wow_specialisation/getSpecialisationDetailsById.usecase';
import { CommonModule } from '@angular/common';
import { Specialisation } from '../../domain/models/wowSpeDetails.model';

@Component({
  selector: 'app-wow-specialization',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wow-specialization.html',
  styleUrl: './wow-specialization.scss',
})
export class WowSpecialization implements OnInit {
  speData = signal<SpeDetails | null>(null);
  dData = signal<Specialisation | null>(null);
BestInSlots: any;
bestInSlots: any;
bisSlots: any;
  
  constructor(
    private route: ActivatedRoute,
    private getSpecializationbyId: GetSpecializationbyId,
    private getSpecialisationId: GetSpecialisationbyId,
    private cdr: ChangeDetectorRef
  
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getSpecializationbyId.execute(id).subscribe(res => {
      console.log(res);
      this.speData.set(res);
    });
    this.callApiNestJs();
  }

  callApiNestJs(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getSpecialisationId.execute(id).subscribe(x => {
      console.log(x);
      this.dData.set(x);
    })
  }

  private initTooltips(): void {
    const wowdbTooltip = (window as any).wowdbTooltip;
    if (wowdbTooltip && typeof wowdbTooltip.init === 'function') {
      console.log('Initializing tooltips...');
      wowdbTooltip.init();
    }
  }

  formatUrls(text: string): string[] {
    return text.replace(/"/g, '').split(',').map(u => u.trim());
  }
  
  formatCycleText(text: string): string {
  return text
    .split('\r\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('<br><br>');
}

getItemId(url: string): string {

  const match = url.match(/item=(\d+)/);
  return match ? match[1] : '';
}

}