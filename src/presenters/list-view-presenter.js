import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import TripPointView from '../view/trip-point-view';
import EventEditView from '../view/event-edit-view';
import EventAddView from '../view/event-add-view';

import {render} from '../render.js';
import ListModel from "../model/list-model";

export default class ListViewPresenter {

  listContainer = new ListView();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.listContainer, this.container);
    render(new EventEditView(), this.listContainer.getElement());
    render(new EventAddView(), this.listContainer.getElement());

    for(let i = 0; i < 3; i++) {
      render(new TripPointView('Lorem Ipsum'), this.listContainer.getElement());
    }
  }

}
