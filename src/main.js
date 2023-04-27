import SortView from './view/sort-view.js';
import {render} from './render.js';

const $tripEevents = document.querySelector('.trip-events');

render(new SortView(), $tripEevents);
