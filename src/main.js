import ListPresenter from './presenters/list-presenter.js';

const tripEventsElement = document.querySelector('.trip-events');

const listViewPresenter = new ListPresenter(tripEventsElement);
listViewPresenter.init();
