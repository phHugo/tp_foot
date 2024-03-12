import { Controller, Get, Post, Body, Param, NotFoundException  } from '@nestjs/common';
import { ChampionshipsService } from './championships.service';
import { Championship } from './championship.model';
import { Team } from 'src/teams/team.model';

@Controller('championships')
export class ChampionshipsController {
  constructor(private championshipsService: ChampionshipsService) {}

  @Get()
  getAllChampionships(): Championship[] {
    return this.championshipsService.getAllChampionships();
  }

  @Post()
  addChampionship(@Body() championship: Championship) {
    this.championshipsService.addChampionship(championship);
  }

  @Post(':championshipId/add-team')
  addTeamToChampionship(
    @Param('championshipId') championshipId: number,
    @Body() team: Team // Utilisation de l'objet Team directement
  ) {
    const championship = this.championshipsService.getChampionshipById(championshipId);
    if (!championship) {
      throw new NotFoundException('Championship not found');
    }

    // Appeler le service pour ajouter l'équipe au championnat
    this.championshipsService.addTeamToChampionship(championshipId, team);

    return `Team added to championship with ID ${championshipId}`;
  }
}
