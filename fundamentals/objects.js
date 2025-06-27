const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Red',
  mileage: 10000,
  isElectric: false,
  isManual: true,
  isAutomatic: false,
  isDiesel: false,
  isRunning: false,
  // methods (functions)
  drive: function() {
    this.isRunning = true;
    console.log('Driving the car');
  },
  stop: function() {
    this.isRunning = false;
    console.log('Stopping the car');
  },
  getMileage: function() {
    return this.mileage;
  },
  getColor: function() {
    return this.color;
  }
};

console.log(car);

car.drive();
car.stop();

console.log(car.getMileage());
console.log(car.getColor());

car.mileage = 10001;

console.log(car.getMileage());
console.log(car.getColor());