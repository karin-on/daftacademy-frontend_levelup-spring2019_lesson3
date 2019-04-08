import { Time } from "./Time";


export class Clock {
    constructor() {
        this.startTime = new Time();
    }

    * generator(start, stop) {
        for (let i = start; true ; i++) {
            yield this.transform(i, stop);
        }
    };

    transform(val, stop) {
        return val % stop;
    };

    setStartTime() {
        this.startTime.getTime();
    }

    startGenerators() {
        this.hoursCounter = this.generator(this.startTime.hours, 13);
        this.minutesCounter = this.generator(this.startTime.minutes, 60);
        this.secondsCounter = this.generator(this.startTime.seconds, 60);

        this.hours = this.hoursCounter.next().value;
        this.minutes = this.minutesCounter.next().value;
        this.seconds = this.secondsCounter.next().value;

        this.printTime();
    }

    printTime() {
        const clockHours = document.querySelector('.clock__hours');
        const clockMinutes = document.querySelector('.clock__minutes');
        const clockSeconds = document.querySelector('.clock__seconds');

        clockHours.innerText = this.printTwoDigits(this.hours);
        clockMinutes.innerText = this.printTwoDigits(this.minutes);
        clockSeconds.innerText = this.printTwoDigits(this.seconds);
    }

    printTwoDigits(time) {
        return time.toString().padStart(2, '0');
    }

    changeMinutes() {
        !this.seconds
            ? this.minutes = this.minutesCounter.next().value
            : null;
    }

    changeHours() {
        !this.seconds && !this.minutes
            ? this.hours = this.hoursCounter.next().value
            : null;
    }

    startSeconds() {
        setInterval(() => {
            this.seconds = this.secondsCounter.next().value;
            this.changeMinutes();
            this.changeHours();
            this.printTime();
        }, 1000);
    }
}
