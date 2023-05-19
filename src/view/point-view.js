import {TYPES} from '../const.js';
import {getFormattedPointDuration} from '../utils.js';
import {createElement} from '../render.js';
import dayjs from 'dayjs';


const createTitle = (typeAlias, destination) => {
  return TYPES.find((type) => type.alias === typeAlias).title + ' ' + destination.name;
}

const createOffers = (offers) => {

  let offersTemplate = ``;

  offers.forEach((offer) => {
    offersTemplate += `
      <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>
    `;
  });

  return offersTemplate;
}


function createPointTemplate({point, pointDestination, pointOffers}) {

  const {
    'date_from': dateFrom,
    'date_to': dateTo,
    'base_price': basePrice,
    'is_favorite': isFavorite,
    offers,
    type,
  } = point;

  return (`
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dayjs(dateFrom).format('YYYY-MM-DD')}">${dayjs(dateFrom).format('MMM D')}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${createTitle(type, pointDestination)}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs(dateFrom).format('YYYY-MM-DD[T]hh:mm')}">${dayjs(dateFrom).format('h:mm')}</time>
            —
            <time class="event__end-time" datetime="${dayjs(dateTo).format('YYYY-MM-DD[T]hh:mm')}">${dayjs(dateTo).format('h:mm')}</time>
          </p>
          <p class="event__duration">${getFormattedPointDuration(dateFrom, dateTo)}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
            ${createOffers(pointOffers)}
        </ul>
        <button class="event__favorite-btn${isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `);
}

export default class PointView {

  constructor({point, pointDestination, pointOffers}) {
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createPointTemplate({
      point: this.point,
      pointDestination: this.pointDestination,
      pointOffers: this.pointOffers
    });
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
