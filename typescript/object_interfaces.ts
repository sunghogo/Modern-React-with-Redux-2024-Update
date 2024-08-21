/*
    - Objects need to be typed and can be done in two ways:
        - Inline
        - Interfaces
            - PascalCase
            - Can define a custom object type
*/

interface Car {
  year: number;
  make: string;
  model: string;
}

function formatCar(car: Car) {
  // car.tires // Error
  return `Year: ${car.year}, model: ${car.model}, make: ${car.make}`;
}

formatCar({ year: 2015, make: 'Ford', model: 'Mustang' });
