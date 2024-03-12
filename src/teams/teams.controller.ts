import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './team.model';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  getAllTeams(): Team[] {
    return this.teamsService.getAllTeams();
  }

  @Post()
  addTeam(@Body() team: Team) {
    this.teamsService.addTeam(team);
  }
}
