import React from 'react';
import './Clock.css';

export class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getTimeDetail(new Date());

        this.setTimer();
    }

    /**
     * Set timer, refresh each 1 second
     */
    setTimer() {
        setTimeout(this.updateClock.bind(this), 1000);
    }

    /**
     * Set current time to clock
     */
    updateClock() {
        this.setState(this.getTimeDetail(new Date()), this.setTimer);
    }

    /**
     * Return hours, minutes, seconds and day period (am/pm)
     * @param {any} time
     */
    getTimeDetail(time) {
        return {
            hours: time.getHours(),
            minutes: time.getMinutes(),
            seconds: time.getSeconds(),
            ampm: time.getHours() >= 12 ? 'PM' : 'AM'
        }
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;

        return (
            <div className="clock">
                <div className="clock-body">
                    <span>{hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours}</span>:
                    <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
                    <span>{seconds > 9 ? seconds : `0${seconds}`} {ampm}</span>
                </div>
            </div>
        );
    }
}