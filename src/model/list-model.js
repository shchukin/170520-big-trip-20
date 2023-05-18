import {mockPoints} from '../mock/point.js'


const POINTS_COUNT = 7;

export default class ListModel {

  points = Array.from(mockPoints);

  getPoints() {
    return this.points;
  }
}
