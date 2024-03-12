import { Injectable } from '@nestjs/common';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private players: Player[] = [];

  getAllPlayers(): Player[] {
    return this.players;
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
}
