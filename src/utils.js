import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration);


const getRandomArrayElement = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

/* Продолжительность в формат 364D 23H 59M */

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

const getFormattedPointDuration = (from, to) => {
  const diff = Math.abs(dayjs(from).diff(dayjs(to)));

  if (diff >= MSEC_IN_DAY) {
    return dayjs.duration(diff).format('D[D] H[H]').replaceAll(' 0H', '');
  }

  if (diff >= MSEC_IN_HOUR) {
    return dayjs.duration(diff).format('H[H] m[M]').replaceAll(' 0M', '');
  }

  return dayjs.duration(diff).format('m[M]');
}

export {getFormattedPointDuration, getRandomArrayElement};
