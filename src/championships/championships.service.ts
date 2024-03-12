import { Injectable } from '@nestjs/common';
import { Championship } from './championship.model';
import { Team } from 'src/teams/team.model';

@Injectable()
export class ChampionshipsService {
  private championships: Championship[] = [];

  getAllChampionships(): Championship[] {
    return this.championships;
  }

  getChampionshipById(id: number): Championship {
    return this.championships.find(championship => championship.id === id);
  }

  addChampionship(championship: Championship) {
    this.championships.push(championship);
  }

  addTeamToChampionship(championshipId: number, team: Team) {
    const championship = this.getChampionshipById(championshipId);
    championship.teams.push(team);
  }
}
