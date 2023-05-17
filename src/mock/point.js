import {TYPES, OFFERS, DESTINATIONS} from '../const.js';
import {getRandomArrayElement} from '../utils.js';

const mockPoints = [
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-18T10:30'),
    "end-date": new Date('2024-03-18T11:00'),
    "title": 'Taxi Amsterdam',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": true
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-18T12:25'),
    "end-date": new Date('2024-03-18T13:35'),
    "title": 'Flight Chamonix',
    "price": 160,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": false
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19T14:30'),
    "end-date": new Date('2024-03-19T16:05'),
    "title": 'Drive Chamonix',
    "price": 160,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": true
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19T16:20'),
    "end-date": new Date('2024-03-19T17:00'),
    "title": 'Check-in Chamonix',
    "price": 600,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": true
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-19T14:20'),
    "end-date": new Date('2024-03-19T15:00'),
    "title": 'Sightseeing Chamonix',
    "price": 50,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": false
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-20T16:00'),
    "end-date": new Date('2024-03-20T17:00'),
    "title": 'Drive Geneva',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": false
  },
  {
    "destination": getRandomArrayElement(DESTINATIONS),
    "type": getRandomArrayElement(TYPES),
    "start-date": new Date('2024-03-20T18:00'),
    "end-date": new Date('2024-03-20T19:00'),
    "title": 'Flight Geneva',
    "price": 20,
    "offers": getRandomArrayElement(OFFERS),
    "favorite": false
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
