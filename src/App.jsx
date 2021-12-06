import { hot } from 'react-hot-loader';
import React from 'react';
import styles from './assets/css/index.module.scss';

const urlParams = new URLSearchParams(window.location.search);

function getParam(key, defaultValue = '') {
  return urlParams.has(key) ? urlParams.get(key) : defaultValue;
}
const FILE_STORAGE = 'https://storage.romua1d.ru/csgobot/';

const championshipName = getParam('championship_name', 'eXTREMESLAND 2020 Southeast Asia');
const teamWonName = getParam('team_won_name', 'Beyond');
const teamLoseName = getParam('team_lose_name', 'Paper Rex');
const teamWonScore = getParam('team_won_score', 2);
const teamLoseScore = getParam('team_lose_score', 1);
const matchType = getParam('match_type', 'bo3');
const teamWonLogoUrl = getParam('team_won_logo_url', `${FILE_STORAGE}/team/beyond.png`);
const teamLoseLogoUrl = getParam('team_lose_logo_url', `${FILE_STORAGE}/team/paper_rex.png`);
const teamWonFlagUrl = getParam('team_won_flag_url', `${FILE_STORAGE}/country/russia.png`);
const teamLoseFlagUrl = getParam('team_lose_flag_url', `${FILE_STORAGE}/country/belgium.png`);

const teamWonLogoStyle = {
  backgroundImage: `url(${teamWonLogoUrl})`,
};
const teamLoseLogoStyle = {
  backgroundImage: `url(${teamLoseLogoUrl})`,
};
const teamWonFlagStyle = {
  backgroundImage: `url(${teamWonFlagUrl})`,
};
const teamLoseFlagStyle = {
  backgroundImage: `url(${teamLoseFlagUrl})`,
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
          <div className={styles.team_flag} style={teamWonFlagStyle} />
          <div className={styles.team_name_wrap}>{teamWonName.toUpperCase()}</div>
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
          <div className={styles.team_flag} style={teamLoseFlagStyle} />
          <div className={styles.team_name_wrap}>{teamLoseName.toUpperCase()}</div>
        </div>
      </div>
    </div>
  </div>
);

export default hot(module)(App);
