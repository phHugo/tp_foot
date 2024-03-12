import { Injectable } from '@nestjs/common';

@Injectable()
export class FootballConfigurationService {
  constructor(private options: Record<string, string>) {}

  getEnvironment(): string {
    return this.options['environment'];
  }

  isDebugEnabled(): boolean {
    return this.options['debug'] === 'true';
  }
}
