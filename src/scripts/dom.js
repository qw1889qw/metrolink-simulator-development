import map from '../assets/metrolink-orangecounty.png';

// elements in DOM from beginning
const outerMessageDiv = document.querySelector('.messages');
const cbRadio = document.getElementById('radio-cb');
const promiseRadio = document.getElementById('radio-promise');
const asyncRadio = document.getElementById('radio-async');
const startButton = document.querySelector('.button--start');
const restartButton = document.querySelector('.button--restart');

// add image to DOM when everything else has been parsed & loaded
window.onload = () => {
  const img = document.createElement('img');
  img.classList.add('oc-line-map');
  img.src = map;
  img.alt =
    'diagram of the Metrolink Orange County Line. stations, from first to last: Oceanside, San Clemente Pier, San Clemente, San Juan Capistrano, Laguna Niguel/Mission Viejo, Irvine, Tustin, Santa Ana, Orange, Anaheim, Fullerton, Buena Park, Norwalk/Santa Fe Springs, Commerce, L.A. Union Station';
  document.querySelector('.map-container').appendChild(img);
};

// create inner div to display messages when start button clicked
// make sure start button can only be clicked once until train arrives @ destination
const createInnerMessageDiv = () => {
  const innerMessageDiv = document.createElement('div');
  innerMessageDiv.classList.add('messages-inner');
  outerMessageDiv.insertBefore(innerMessageDiv, restartButton);
};

const addMessage = message => {
  const messageP = document.createElement('p');
  messageP.textContent = message;
  document.querySelector('.messages-inner').appendChild(messageP);
  window.scrollTo(0, document.body.scrollHeight);
};

// to be used after arriving @ Union Station
const promptRestart = () => {
  document.querySelector('.button--restart').classList.remove('unclickable');
};

// when restart button clicked: clear out message div, make restart button invisible again, re-enable start button
const restart = () => {
  if (document.querySelector('.messages-inner')) {
    outerMessageDiv.removeChild(document.querySelector('.messages-inner'));
  }
  restartButton.classList.add('unclickable');
  startButton.removeAttribute('disabled');
};

export {
  cbRadio,
  promiseRadio,
  asyncRadio,
  startButton,
  restartButton,
  createInnerMessageDiv,
  addMessage,
  promptRestart,
  restart
};
