const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

// Done - Add a dinosaur to its collection of dinosaurs

Park.prototype.add_dinosaur = function( dinosaur){
  this.dinosaurs.push(dinosaur);
};

// done - Remove a dinosaur from its collection of dinosaurs

Park.prototype.removeADinosaur = function( dinosaur){
  let my_dino = null;
  let found = this.dinosaurs.includes(dinosaur);
   if (found) {
    my_dino = this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1);
}
return my_dino;
};

Park.prototype.comparePopularity = function(x,y) {
// somehow this knows to get the two objects for comparing
    const guestsX = x.guestsAttractedPerDay;
    const guestsY = y.guestsAttractedPerDay;
// this gets the values out of the objects
    let comparison = 0;
    if (guestsX < guestsY) {
      comparison = 1;
    } else if (guestsX > guestsY) {
      comparison = -1;
    }
    return comparison;

// sets a standard  positive or negative numerical difference
// after comparing the 2 values
// to indicate the direction for sorting them
// sorting by numbers needs its own function
// because otherwise they are sorted as strings
};

// done - Find the dinosaur that attracts the most visitors

Park.prototype.mostPopularDino = function(){
  this.dinosaurs.sort(this.comparePopularity);
return this.dinosaurs[0];
};

// - Find all dinosaurs of a particular species
// - Assuming this means locate them not fetch them:

Park.prototype.locateAll = function(species_to_find){
  var locations = [];
  for (var i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species_to_find) {
      locations.push(i);
    };
  };
return locations;
};

// - Remove all dinosaurs of a particular species
// - Assuming this means remove them and return them:

Park.prototype.removeAll = function(species_to_remove){
  var counter = this.dinosaurs.length;
  var corral = [];
  while (counter--) {
    if (this.dinosaurs[counter].species === species_to_remove) {
      corral.push( this.dinosaurs.splice(counter,1)[0] );
    };
  };
  return corral;
};
// note array returned is reversed due to loop counting backwards
// sawing the branch off on the other side :)

// - Calculate the total number of visitors per day

Park.prototype.dailyVisitorCount = function(){
  var totalGuests = 0;
  for (var dino of this.dinosaurs) {
    totalGuests += dino.guestsAttractedPerDay;
  };
  return totalGuests;
};

// - Calculate the total number of visitors per year

Park.prototype.annualVisitorCount = function(){
 return this.dailyVisitorCount() * 365;
};

// - Calculate the total revenue from ticket sales for one year

Park.prototype.annualRevenue = function(){  
 return this.ticketPrice * this.annualVisitorCount();
};



module.exports = Park;
