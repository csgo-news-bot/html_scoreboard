import './assets/css/index.module.scss';

const root = document.getElementById('root');

root.innerHTML =
  '<h1>Результаты матча</h1>\n' +
  '<h2>%команда1% vs %команда2%</h2>\n' +
  '<h2>Турнир: %Название турнира%</h2>\n' +
  '<h2>Счет: %счет%</h2>';

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
