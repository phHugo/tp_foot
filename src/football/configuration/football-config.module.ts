import { DynamicModule, Module } from '@nestjs/common';
import { FootballConfigurationService } from './football-config.service';

@Module({})
export class FootballConfigurationModule {
  static register(options: Record<string, string>): DynamicModule {
    return {
      module: FootballConfigurationModule,
      providers: [
        {
          provide: FootballConfigurationService,
          useValue: new FootballConfigurationService(options),
        },
      ],
      exports: [FootballConfigurationService],
    };
  }
}
