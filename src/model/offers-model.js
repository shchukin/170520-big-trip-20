import {offersMocks} from '../mock/offers-mocks.js'

export default class OffersModel {

  offers = Array.from(offersMocks);

  get() {
    return this.offers;
  }

  getByType(type) {
    return this.offers.find( (offer) => offer.type === type ).offers;
  }
}
