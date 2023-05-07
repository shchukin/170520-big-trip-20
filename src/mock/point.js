import {TYPES, OFFERS, DESTINATIONS} from '../const.js';
import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 18',
    "start-time": '16:00',
    "end-date": 'Mar 18',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS)
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 18',
    "start-time": '16:00',
    "end-date": 'Mar 18',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 19',
    "start-time": '16:00',
    "end-date": 'Mar 19',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 19',
    "start-time": '16:00',
    "end-date": 'Mar 19',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 19',
    "start-time": '16:00',
    "end-date": 'Mar 19',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 20',
    "start-time": '16:00',
    "end-date": 'Mar 20',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": 'Mar 20',
    "start-time": '16:00',
    "end-date": 'Mar 20',
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00 ',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockTasks);
}

export {getRandomPoint};
