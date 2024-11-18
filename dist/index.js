"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const read = async (question) => {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};
const convertKelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
};
const convertCelsiusToKelvin = (celsius) => {
    const kelvin = celsius + 273.15;
    return kelvin;
};
const convertKelvinToFahrenheit = (kelvin) => {
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    return fahrenheit;
};
const convertFahrenheitToKelvin = (fahrenheit) => {
    const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    return kelvin;
};
const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
};
const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
};
const main = async () => {
    const menu = `
    1. Kelvin to Celsius
    2. Celsius to Kelvin
    3. Kelvin to Fahrenheit
    4. Fahrenheit to Kelvin
    5. Celsius to Fahrenheit
    6. Fahrenheit to Celsius
    7. Exit
    `;
    while (true) {
        console.log(menu);
        const choice = await read('Enter your choice: ');
        switch (choice) {
            case '1':
                const kelvin = await read('Enter temperature in Kelvin: ');
                const toCelsius = convertKelvinToCelsius(Number(kelvin));
                console.log(`Temperature in Celsius: ${toCelsius}`);
                break;
            case '2':
                const celsius = await read('Enter temperature in Celsius: ');
                const toKelvin = convertCelsiusToKelvin(Number(celsius));
                console.log(`Temperature in Kelvin: ${toKelvin}`);
                break;
            case '3':
                const kelvin1 = await read('Enter temperature in Kelvin: ');
                const toFahrenheit = convertKelvinToFahrenheit(Number(kelvin1));
                console.log(`Temperature in Fahrenheit: ${toFahrenheit}`);
                break;
            case '4':
                const fahrenheit = await read('Enter temperature in Fahrenheit: ');
                const toKelvin1 = convertFahrenheitToKelvin(Number(fahrenheit));
                console.log(`Temperature in Kelvin: ${toKelvin1}`);
                break;
            case '5':
                const celsius1 = await read('Enter temperature in Celsius: ');
                const toFahrenheit1 = convertCelsiusToFahrenheit(Number(celsius1));
                console.log(`Temperature in Fahrenheit: ${toFahrenheit1}`);
                break;
            case '6':
                const fahrenheit1 = await read('Enter temperature in Fahrenheit: ');
                const toCelsius1 = convertFahrenheitToCelsius(Number(fahrenheit1));
                console.log(`Temperature in Celsius: ${toCelsius1}`);
                break;
            case '7':
                console.log('Goodbye!');
                process.exit(0);
            default:
                console.log('Invalid choice');
        }
        ;
    }
    ;
};
main();
