export default interface ISummoner {
  summonerName: string;
  profileIconId: string;
  summonerLevel: string | number;
  responseRanked: IRanked[];
}
interface IRanked {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}
