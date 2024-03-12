import { Team } from "src/teams/team.model";

export class Championship {
    constructor(
      public id: number,
      public name: string,
      public teams: Team[]
    ) {}
  }
  