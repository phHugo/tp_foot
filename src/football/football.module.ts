import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ChampionshipsModule } from '../championships/championships.module';
import { TeamsModule } from '../teams/teams.module';
import { PlayerModule } from 'src/player/player.module';
import { FootballConfigurationModule } from './configuration/football-config.module'; 

const options: Record<string, string> = {
  environment: 'development',
  debug: 'true',
};

@Module({
  imports: [ChampionshipsModule, TeamsModule, PlayerModule, FootballConfigurationModule.register(options)], 
})

export class FootballModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('football');
  }

}

