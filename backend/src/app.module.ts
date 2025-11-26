import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SpecialisationService } from './specialisation.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [SpecialisationService, PrismaService],
})
export class AppModule {}
