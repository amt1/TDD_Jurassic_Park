const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
      park = new Park('Jurassic Park', 100, []);
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
    park.remove_a_dinosaur(dinosaur4)
    const actual2 = park.dinosaurs;
    assert.deepStrictEqual(actual2, [dinosaur1,dinosaur2,dinosaur3,dinosaur5]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)

    const actual = park.most_popular_dino();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)

    const actual = park.locate_all("Velociraptor");
    assert.deepStrictEqual(actual, [3,5]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.add_dinosaur(dinosaur3)
    park.add_dinosaur(dinosaur4)
    park.add_dinosaur(dinosaur5)
    park.add_dinosaur(dinosaur6)
    dinosaur1.species="Velociraptor";
    const dinoCorral = park.remove_all("Velociraptor");
    const dinosRemaining = park.dinosaurs;
    assert.deepStrictEqual(dinoCorral, [dinosaur6,dinosaur4, dinosaur1]);
    assert.deepStrictEqual(dinosRemaining, [dinosaur2,dinosaur3,dinosaur5]);

  });

});
