import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { TeamsService } from 'src/teams/teams.service';
import { Player } from './player.model';

@Controller('players')
export class PlayerController {
  constructor(private playersService: PlayerService, private teamsService: TeamsService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playersService.getAllPlayers();
  }

  @Post()
  addPlayer(@Body() player: Player) {
    this.playersService.addPlayer(player);
  }

  @Post(':teamId')
  addPlayerToTeam(@Param('teamId') teamId: number, @Body() player: Player) {
    this.teamsService.addPlayerToTeam(teamId, player);
  }
}
