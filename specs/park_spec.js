const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const DietCounter = require('../models/diet.js');

describe('Park', function() {

  let park;
  let dietCounter1;

  beforeEach(function () {
      dietCounter1 = new DietCounter();
      park = new Park('Jurassic Park', 100, [], dietCounter1);
      dinosaur1 = new Dinosaur("Triceratops", "Plants", 100);
      dinosaur2 = new Dinosaur("Diplodocus", "Plants", 200);
      dinosaur3 = new Dinosaur("Pterodactyl", "Fish", 150);
      dinosaur4 = new Dinosaur("Velociraptor", "Everything", 10);
      dinosaur5 = new Dinosaur("Triceratops", "Plants", 100);
      dinosaur6 = new Dinosaur("Velociraptor", "Everything", 10);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');

  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add_dinosaur(dinosaur1)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)

    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1,dinosaur2,dinosaur3,dinosaur4,dinosaur5]);
    park.removeADinosaur(dinosaur4)
    const actual2 = park.dinosaurs;
    assert.deepStrictEqual(actual2, [dinosaur1,dinosaur2,dinosaur3,dinosaur5]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)

    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    dinosaur1.species="Velociraptor";

    const actual = park.locateAll("Velociraptor");
    assert.deepStrictEqual(actual, [0,3,5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    dinosaur1.species="Velociraptor";
    const dinoCorral = park.removeAll("Velociraptor");
    const dinosRemaining = park.dinosaurs;
    assert.deepStrictEqual(dinoCorral, [dinosaur6,dinosaur4, dinosaur1]);
    assert.deepStrictEqual(dinosRemaining, [dinosaur2,dinosaur3,dinosaur5]);

  });

  it('should be able to calculate the daily visitor count', function() {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    const actual = park.dailyVisitorCount();
    assert.strictEqual(actual, 570);
  });
  it('should be able to calculate the annual visitor count', function() {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    const actual = park.annualVisitorCount();
    assert.strictEqual(actual, 208050);
  });

  it('should be able to calculate the annual revenue from ticket sales', function() {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    const actual = park.annualRevenue();
    assert.strictEqual(actual, 20805000);
  });

  it('should count the dinosaurs diets', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    const actual1 = park.dietCounter.herbivores;
    const actual2 = park.dietCounter.carnivores;
    const actual3 = park.dietCounter.omnivores;

    assert.strictEqual(actual1,3);
    assert.strictEqual(actual2,1);
    assert.strictEqual(actual3,2);

  });

});
