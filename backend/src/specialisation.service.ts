import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Specialisation } from '@prisma/client';

@Injectable()
export class SpecialisationService {
  constructor(private prisma: PrismaService) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async getAllSpecialisations(): Promise<Specialisation[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.prisma.specialisation.findMany({
      include: {
        glyphes: true,
        templates: true,
        cycles: true,
      },
    });
  }
}
