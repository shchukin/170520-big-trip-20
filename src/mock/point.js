import {TYPES, OFFERS, DESTINATIONS} from '../const.js';
import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-18'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-18'),
    "end-time": '18:00',
    "title": 'Taxi Amsterdam',
    "time": '16:00',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS)
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-18'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-18'),
    "end-time": '18:00',
    "title": 'Flight Chamonix',
    "time": '16:00',
    "price": 160,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-19'),
    "end-time": '18:00',
    "title": 'Drive Chamonix',
    "time": '16:00',
    "price": 160,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-19'),
    "end-time": '18:00',
    "title": 'Check-in Chamonix',
    "time": '16:00',
    "price": 600,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-19'),
    "end-time": '18:00',
    "title": 'Sightseeing Chamonix',
    "time": '16:00',
    "price": 50,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-20'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-20'),
    "end-time": '18:00',
    "title": 'Drive Geneva',
    "time": '16:00',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-20'),
    "start-time": '16:00',
    "end-date": new Date('2024-03-20'),
    "end-time": '18:00',
    "title": 'Flight Geneva',
    "time": '16:00',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
