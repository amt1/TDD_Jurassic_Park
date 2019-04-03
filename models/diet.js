const DietCounter = function() {
  this.herbivores = 0;
  this.carnivores = 0;
  this.omnivores = 0;

}

DietCounter.prototype.add = function(dino_diet) {
  let diet = dino_diet;
  if (diet == "Plants") { this.herbivores++};
  if (diet == "Fish") { this.carnivores++};
  if (diet == "Everything") { this.omnivores++};

};

DietCounter.prototype.countHerbivores = function(){
 return this.herbivores;
};

DietCounter.prototype.countCarnivores = function(){
 return this.carnivores;
};
DietCounter.prototype.countOmniivores = function(){
 return this.omnivores;
};

module.exports = DietCounter;
