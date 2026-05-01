/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Specialisation } from '@prisma/client';

@Injectable()
export class SpecialisationService {
  constructor(private prisma: PrismaService) {}

  async getAllSpecialisations(): Promise<Specialisation[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return this.prisma.specialisation.findMany({
      include: {
        glyphes: true,
        templates: true,
        cycles: true,
        bestInSlots: true,
      },
    });
  }
  async getSpecialisationbyId(id: number): Promise<Specialisation | null> {
    return this.prisma.specialisation.findUnique({
      where: { id },
      include: {
        glyphes: true,
        cycles: true,
        templates: true,
        bestInSlots: true,
      },
    });
  }
}
