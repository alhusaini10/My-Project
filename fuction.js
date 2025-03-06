// Some code
function train(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  train.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  train.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  train.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }

const train1 = new train('Alstom', 'White', 350, 'TGV');
const train2 = new train('KAI', 'White', 300, 'TGV');
const train3 = new train('Network Rail', 'White', 300, 'TGV');

console.log(train1);
console.log(train2);
console.log(train3);

train1.drive();
train2.reverse();
train3.turn();