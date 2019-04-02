const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.add_dinosaur = function( dinosaur){
  this.dinosaurs.push(dinosaur);
};

// Done - Add a dinosaur to its collection of dinosaurs
// - Remove a dinosaur from its collection of dinosaurs
// - Find the dinosaur that attracts the most visitors
// - Find all dinosaurs of a particular species
// - Calculate the total number of visitors per day
// - Calculate the total number of visitors per year
// - Calculate the total revenue from ticket sales for one year
//



module.exports = Park;
