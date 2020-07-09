'use strict';

const months = [
    {
        name: 'January',
        days: 31,
        nextMonth: 'February'
    }, {
        name: 'February',
        days: 29,
        nextMonth: 'March'
    }, {
        name: 'March',
        days: 31,
        nextMonth: 'April'
    }, {
        name: 'April',
        days: 30,
        nextMonth: 'May'
    }, {
        name: 'May',
        days: 31,
        nextMonth: 'June'
    }, {
        name: 'June',
        days: 30,
        nextMonth: 'July'
    }, {
        name: 'July',
        days: 31,
        nextMonth: 'August'
    }, {
        name: 'August',
        days: 30,
        nextMonth: 'September'
    }, {
        name: 'September',
        days: 30,
        nextMonth: 'October'
    }, {
        name: 'October',
        days: 31,
        nextMonth: 'November'
    }, {
        name: 'November',
        days: 30,
        nextMonth: 'December'
    }, {
        name: 'December',
        days: 31,
        nextMonth: 'January'
    }
];

const months = {
    January : {
        days: 31,
        nextMonth: 'February'
    },
    February : {
        days : function(isLeap = false){ return isLeap ? 29 : 28 },
        nextMonth : 'March'
    }, {
        name: 'March',
        days: 31,
        nextMonth: 'April'
    }, {
        name: 'April',
        days: 30,
        nextMonth: 'May'
    }, {
        name: 'May',
        days: 31,
        nextMonth: 'June'
    }, {
        name: 'June',
        days: 30,
        nextMonth: 'July'
    }, {
        name: 'July',
        days: 31,
        nextMonth: 'August'
    }, {
        name: 'August',
        days: 30,
        nextMonth: 'September'
    }, {
        name: 'September',
        days: 30,
        nextMonth: 'October'
    }, {
        name: 'October',
        days: 31,
        nextMonth: 'November'
    }, {
        name: 'November',
        days: 30,
        nextMonth: 'December'
    }, {
        name: 'December',
        days: 31,
        nextMonth: 'January'
    }
};

class Calendar {
    constructor(months) {
        this.date = {
            day: 1,
            month: 'January',
            year: 1
        };
        this.months = months;
        this.nextDate = {};
    }

    getDate() {
        for(let name in this.date){
            this.date[name] = name === 'month' ? 
                        prompt(`Enter a ${name}`, '') : 
                        parseInt(prompt(`Enter a ${name}`, ''));
        }
        // Object.keys(this.date)
        //       .forEach(time => {
        //           time === 'month'
        //               ? this.date[time] = prompt(`Enter a ${time}`, '')
        //               : this.date[time] = parseInt(prompt(`Enter a ${time}`, ''));
        //       });
        console.log(`The user entered the date`, this.date);
    }

    showNextDate() {
        this._calculateNextDate();
        console.log(this.nextDate);
    }

    _calculateNextDate() {
        const month = this.months.find(month => month.name === this.date.month);
        const year = this.date.year;

        if (this.isLeapYear() && month.name === 'February') {
            const isMarch = month.days === this.date.day ? month.nextMonth : month.name;
            const day = isMarch === month.nextMonth ? 1 : this.date.day + 1;
            this.setNextDate(day, isMarch, year);
        } else if (month.name === 'February') {
            const isMarch = this.date.day === 28 ? month.nextMonth : month.name;
            const day = isMarch === month.nextMonth ? 1 : this.date.day + 1;
            this.setNextDate(day, isMarch, year);
        } else if (month.name === 'December' && this.date.day === month.days) {
            this.setNextDate(1, 'January', year + 1);
        } else if (month.days === this.date.day) {
            this.setNextDate(1, month.nextMonth, year);
        } else {
            this.setNextDate(this.date.day + 1, month.name, year);
        }
    }

    isLeapYear() {
        if (this.date.year % 400 === 0) {
            return true;
        }

        return this.date.year % 4 === 0 && this.date.year % 100 !== 0;
    }

    setNextDate(day, month, year) {
        this.nextDate = {day, month, year};
    }
}

const calendar = new Calendar(months);
calendar.getDate();
calendar.showNextDate();