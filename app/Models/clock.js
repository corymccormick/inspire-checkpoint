export default class Clock {

  constructor(hours, minutes) {
    this.hours = hours
    this.minutes = minutes
  }
  get Template() {

    let currentMinutes = this.minutes;
    let currentHours = this.hours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    let currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;
    return `<span>${currentTimeString}</span>`

  }
}
