/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Controller, Get, Param } from '@nestjs/common';
import { SpecialisationService } from './specialisation.service';
import { Specialisation as SpecialisationModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly specialisationService: SpecialisationService) {}

  @Get('specialisation')
  async getAllSpecialisations(): Promise<SpecialisationModel[]> {
    return this.specialisationService.getAllSpecialisations();
  }

  @Get('specialisation/:id')
  async getSpecialisationById(
    @Param('id') id: string,
  ): Promise<SpecialisationModel | null> {
    return this.specialisationService.getSpecialisationbyId(Number(id));
  }
}
