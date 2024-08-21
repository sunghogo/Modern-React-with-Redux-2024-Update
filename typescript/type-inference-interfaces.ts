/*
    - When you are creating interface instances, make sure to manually add type annotation to catch errors ahead of time
*/

interface Car2 {
  model: string;
  year: number;
}

function printCar(car: Car2) {
  console.log(car);
}

const mustang: Car2 = { model: 'Mustang', year: 2015 };

// const camaro: Car2 = { model: 'Camaro', year: '2010' }; // Error
const camaro: Car2 = { model: 'Camaro', year: 2010 };

printCar(mustang);

printCar(camaro);
