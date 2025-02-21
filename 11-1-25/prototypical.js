
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log(`Starting the engine of the ${this.year} ${this.make} ${this.model}.`);
    }
  }
  
  
  class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
      super(make, model, year); 
      this.batteryLife = batteryLife; 
    }
  
    startEngine() {
      console.log(`Starting the electric motor of the ${this.year} ${this.make} ${this.model}.`);
    }
  
    charge() {
      console.log(`Charging the battery of the ${this.year} ${this.make} ${this.model}. Battery life: ${this.batteryLife}%`);
    }
  }
  
  
  const tesla = new ElectricCar('Tesla', 'Model S', 2023, 100);
  
 
  tesla.startEngine();  
  tesla.charge();
  


  