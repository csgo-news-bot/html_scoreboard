import { hot } from 'react-hot-loader';
import React from 'react';
import styles from './assets/css/index.module.scss';

const urlParams = new URLSearchParams(window.location.search);
const championshipName = urlParams.get('championship_name');
const teamWonName = urlParams.get('team_won_name');
const teamLoseName = urlParams.get('team_lose_name');
const teamWonScore = urlParams.get('team_won_score');
const teamLoseScore = urlParams.get('team_lose_score');
const matchType = urlParams.get('match_type');
const teamWonLogoUrl = urlParams.get('team_won_logo_url');
const teamLoseLogoUrl = urlParams.get('team_lose_logo_url');

const teamWonLogoStyle = {
  backgroundImage: `url(${teamWonLogoUrl})`,
};
const teamLoseLogoStyle = {
  backgroundImage: `url(${teamLoseLogoUrl})`,
};

const App = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.event_name}>
        {championshipName.toUpperCase()}
      </div>
    </div>
    <div className={styles.mid}>
      <div className={styles.team}>
        <div className={styles.team_logo} style={teamWonLogoStyle} />
        <div className={styles.team_name}>
          {teamWonName.toUpperCase()}
        </div>
      </div>
      <div className={styles.score}>
        <div className={styles.score_table}>
          {teamWonScore}
          {' '}
          -
          {' '}
          {teamLoseScore}
        </div>
        <div className={styles.match_kind}>
          {matchType.toUpperCase()}
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.team_logo} style={teamLoseLogoStyle} />
        <div className={styles.team_name}>
          {teamLoseName.toUpperCase()}
        </div>
      </div>
    </div>
  </div>
);

export default hot(module)(App);
