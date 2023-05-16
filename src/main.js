import ListViewPresenter from './presenters/list-view-presenter.js';

const tripEventsElement = document.querySelector('.trip-events');

const listViewPresenter = new ListViewPresenter(tripEventsElement);
listViewPresenter.init();
