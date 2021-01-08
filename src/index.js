import './assets/css/index.module.scss';

const root = document.getElementById('root');
const urlParams = new URLSearchParams(window.location.search);

root.innerHTML = `
<h1>Результаты матча</h1>
<h2>${ urlParams.get("team_won_name") } vs ${ urlParams.get("team_lose_name") }</h2>
<h2>Турнир: ${ urlParams.get("championship_name") }</h2>
<h2>Счет: ${ urlParams.get("team_won_score") } - ${ urlParams.get("team_lose_score") } (${ urlParams.get("match_type") })</h2>
`;

if (module.hot) {
  module.hot.accept();
}
