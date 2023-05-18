import {destinationsMocks} from '../mock/destinations-mocks.js'

export default class DestinationsModel {

  destinations = destinationsMocks;

  get() {
    return this.destinations;
  }

  getById(id) {
    return this.destinations.find( (destination) => destination.id === id );
  }
}
