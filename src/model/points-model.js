import {pointsMocks} from '../mock/points-mocks.js'

const POINTS_COUNT = 7;

export default class PointsModel {

  points = pointsMocks;

  getPoints() {
    return this.points;
  }
}
