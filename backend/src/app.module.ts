import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SpecialisationService } from './specialisation.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { BlizzardController } from './blizzard-auth-controller';
import { BlizzardToken } from './blizzard-auth-token.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [AppController, BlizzardController],
  providers: [SpecialisationService, PrismaService, BlizzardToken],
})
export class AppModule {}
