import {getRandomPoint} from '../mock/point.js'

const POINTS_COUNT = 7;

export default class ListModel {

  points = Array.from({length: POINTS_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
