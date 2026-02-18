/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line prettier/prettier
import { Controller, Get } from "@nestjs/common";
// eslint-disable-next-line prettier/prettier
import { BlizzardToken } from "./blizzard-auth-token.service";




@Controller('blizzard')
export class BlizzardController {
  constructor(private readonly blizzardToken: BlizzardToken) {}

  @Get('token')
  async getToken() {
    const token = await this.blizzardToken.getToken(
      process.env.BLIZZARD_CLIENT_ID!,
      process.env.BLIZZARD_CLIENT_SECRET!,
    );
    console.log('ton token :', token);

    return { token };
  }
}
