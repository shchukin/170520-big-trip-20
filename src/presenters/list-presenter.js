import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import PointView from '../view/point-view';
import EventEditView from '../view/event-edit-view';
import EventAddView from '../view/event-add-view';

import {render} from '../render.js';

import DestinationsModel from "../model/destinations-model";
import OffersModel from "../model/offers-model";
import PointsModel from "../model/points-model";

const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const pointsModel = new PointsModel();


export default class ListPresenter {

  listContainer = new ListView();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(new SortView(), this.container);
    render(this.listContainer, this.container);
    render(new EventEditView(), this.listContainer.getElement());
    render(new EventAddView(), this.listContainer.getElement());

    pointsModel.points.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestination: destinationsModel.getById(point.destination),
          pointOffers: offersModel.getByType(point.type)
        }),
        this.listContainer.getElement()
      )
    });
  }
}
