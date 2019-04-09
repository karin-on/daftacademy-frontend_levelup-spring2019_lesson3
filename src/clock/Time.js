export class Time {
    constructor() {
        this.date = new Date();
    }

    getTime() {
        this.hours = this.date.getHours() > 12
            ? this.date.getHours() - 12
            : this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
    }
}
