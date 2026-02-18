/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class BlizzardToken {
  private tokenUrl = 'https://oauth.battle.net/token';

  constructor(private readonly http: HttpService) {}

  async getToken(clientId: string, clientSecret: string): Promise<string> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const response = await firstValueFrom(
        this.http.post(this.tokenUrl, params, {
          auth: {
            username: clientId,
            password: clientSecret,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return response.data.access_token;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new Error(
        `Erreur lors de la récupération du token Blizzard : ${axiosError.message}`,
      );
    }
  }
}
