var Team = {
  name: 'Bears 10',
  winner_score: 0.8,
  visibility_score: 1.4,
};

const matchesArray = [
  {
    name: 'Match1',
    team_1: Team,
    team_2: Team,
    is_live: true,
  },
  {
    name: 'Match1',
    team_1: Team,
    team_2: Team,
    is_live: true,
  },
];

export class ApiService {
  static getMatches() {
    return matchesArray;
  }
}
