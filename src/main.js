import SortView from './view/sort-view.js';
import ListView from './view/list-view.js';
import {render} from './render.js';
import ListViewPresenter from './presenters/list-view-presenter.js';

const tripEeventsElement = document.querySelector('.trip-events');

const listViewPresenter = new ListViewPresenter(tripEeventsElement);
listViewPresenter.init();
