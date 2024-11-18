<h1 align="center">Temperature Conversion CLI</h1>

## Overview

The Temperature Conversion CLI is a simple command-line application that converts temperatures between Kelvin, Celsius, and Fahrenheit. 
Users can select from multiple conversion options and input a temperature value to receive the converted result.

## Features

- **Convert Kelvin to Celsius and vice versa.**
- **Convert Kelvin to Fahrenheit and vice versa.**
- **Convert Celsius to Fahrenheit and vice versa.**
- **User-friendly menu-driven interface.**
- **Input validation for seamless user experience.**

## Technologies Used

- **Node.js: Provides the runtime environment for executing the application.**
- **TypeScript: Ensures type safety and better code maintainability.**
- **Readline Module: Handles user input via the command line.**

## Prerequisites

Ensure you have the following installed:
  - **Node.js (v14 or later)**
  - **TypeScript (for editing or running TypeScript directly)**

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ACAZUMAH/GO2COD_SD_05.git
   cd GO2COD_SD_05
   ```

2. **Install dependencies (if applicable)**:
   ```bash
   npm install
   ```

3. **Compile TypeScript to JavaScript (if needed)**:
   ```bash
   npx tsc 
   ```

## Usage

1. **Run the application**:
   ```bash
   npm start
   ```

2. **Follow the on-screen menu**:
    - **Choose a conversion option by entering the corresponding number.**
    - **Provide the input temperature when prompted.**

3. **Example**:
   ```bash
   1. Kelvin to Celsius
   2. Celsius to Kelvin
   3. Kelvin to Fahrenheit
   4. Fahrenheit to Kelvin
   5. Celsius to Fahrenheit
   6. Fahrenheit to Celsius
   7. Exit

   Enter your choice: 1
   Enter temperature in Kelvin: 300
   Temperature in Celsius: 26.85
   ```

## Menu Options

1. **Kelvin to Celsius**
   - Converts Kelvin to Celsius using the formula:
   - code<C = K - 273.15>

2. **Celsius to Kelvin**
   - Converts Celsius to Kelvin using the formula:
   - code<K = C + 273.15>

3. **Kelvin to Fahrenheit**
   - Converts Kelvin to Fahrenheit using the formula:
   - code<F = (K - 273.15) * 9/5 + 32>

4. **Fahrenheit to Kelvin**
   - Converts Fahrenheit to Kelvin using the formula:
   - code<K = (F - 32) * 5/9 + 273.15>

5. **Celsius to Fahrenheit**
   - Converts Celsius to Fahrenheit using the formula:
   - code<F = C * 9/5 + 32>

6. **Fahrenheit to Celsius**
   - Converts Fahrenheit to Celsius using the formula:
   - code<C = (F - 32) * 5/9>

7. **Exit**
   - Exits the application.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. Follow these steps:
  1. **Fork the repository.**
  2. **Create a feature branch**:
     ```bash
     git checkout -b feature-name
     ```
  3. **Commit your changes and push them to your fork.**
  4. **Create a pull request.**

## License

This project is licensed under the MIT License. See the <a href="https://opensource.org/license/MIT">LICENSE</a> file for details.

