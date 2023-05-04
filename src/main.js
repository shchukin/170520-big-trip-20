import ListViewPresenter from './presenters/list-view-presenter.js';

const tripEeventsElement = document.querySelector('.trip-events');

const listViewPresenter = new ListViewPresenter(tripEeventsElement);
listViewPresenter.init();
