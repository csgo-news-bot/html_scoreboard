import { hot } from 'react-hot-loader';
import React from 'react';
import styles from './assets/css/index.module.scss';

// const urlParams = new URLSearchParams(window.location.search);
// const championshipName = urlParams.get('championship_name');
// const teamWonName = urlParams.get('team_won_name');
// const teamLoseName = urlParams.get('team_lose_name');
// const teamWonScore = urlParams.get('team_won_score');
// const teamLoseScore = urlParams.get('team_lose_score');
// const matchType = urlParams.get('match_type');

const championshipName = 'BLAST Premier: Global Final 2020';
const teamWonName = 'Natus Vincere';
const teamLoseName = 'Virtus PRO';
const teamWonScore = 16;
const teamLoseScore = 14;
const matchType = 'bo1';
const eventLogoUrl = 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/NAVI_logo.png/1200px-NAVI_logo.png';
const teamWonLogoUrl = 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/NAVI_logo.png/1200px-NAVI_logo.png';
const teamLoseLogoUrl = 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/2c/NAVI_logo.png/1200px-NAVI_logo.png';

const eventLogoStyle = {
  backgroundImage: `url(${eventLogoUrl})`,
};
const teamWonLogoStyle = {
  backgroundImage: `url(${teamWonLogoUrl})`,
};
const teamLoseLogoStyle = {
  backgroundImage: `url(${teamLoseLogoUrl})`,
};

const App = () => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.event_logo} style={eventLogoStyle} />
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
