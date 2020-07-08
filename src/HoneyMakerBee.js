var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.eat = function() {
  Grub.call(this);
};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
}
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
}