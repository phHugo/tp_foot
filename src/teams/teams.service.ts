import { Injectable } from '@nestjs/common';
import { Team } from './team.model';
import { Player } from 'src/player/player.model';

@Injectable()
export class TeamsService {
  private teams: Team[] = [];

  getAllTeams(): Team[] {
    return this.teams;
  }

  getTeamByName(name: string): Team {
    return this.teams.find(team => team.name === name);
  }

  addTeam(team: Team) {
    this.teams.push(team);
  }

  addPlayerToTeam(teamId: number, player: Player) {
    const teamIndex = this.teams.findIndex(team => team.id === teamId);
    if (teamIndex !== -1) {
      this.teams[teamIndex].players.push(player);
    } else {
      throw new Error('Team not found');
    }
  }
}
