import './styles/styles.scss';
import map from './assets/metrolink-orangecounty.png';

const img = document.createElement('img');
img.classList.add('oc-line-map');
img.src = map;
img.alt = 'diagram of the Metrolink Orange County Line. stations, from first to last: Oceanside, San Clemente Pier, San Clemente, San Juan Capistrano, Laguna Niguel/Mission Viejo, Irvine, Tustin, Santa Ana, Orange, Anaheim, Fullerton, Buena Park, Norwalk/Santa Fe Springs, Commerce, L.A. Union Station';
document.querySelector('.map-container').appendChild(img);
