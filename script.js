'use strict';

let money = prompt('ваш бюджет на месяц'),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    needs = prompt('Введите обязательную статью расходов в этом месяце'),
    cost = prompt('Во сколько обойдется'),
    appData= {
        cash: money,
        calendar: time
    },
    expenses= {needs : cost},
    optionalExpenses= {},
    income= [],
    savings = false;

console.log(appData.cash, appData.calendar, expenses, optionalExpenses, income );

alert (money / 30);
