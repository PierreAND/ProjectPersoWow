import { Controller, Get } from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
import { Specialisation } from '@prisma/client';

@Controller()
export class SpecialisationController {
  constructor(private readonly specialisationService: SpecialisationService) {}
  @Get()
  async getAllSpecialisations(): Promise<Specialisation[]> {
    return this.specialisationService.getAllSpecialisations();
  }
}
