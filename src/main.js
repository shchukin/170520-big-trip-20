import Sort from './view/sort.js';
import {render} from './render.js';

const $tripEevents = document.querySelector('.trip-events');

render(new Sort(), $tripEevents);
