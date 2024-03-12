import { Player } from "src/player/player.model";

export class Team {
    constructor(
      public id: number,
      public name: string,
      public country: string,
      public players: Player[],
    ) {}
  }
  