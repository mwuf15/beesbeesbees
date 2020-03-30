var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.canFly = true;
  this.treasureChest = [];
  this.job = 'find pollen';

};

ForagerBee.prototype.eat = function(){
  Grub.call(this);
}

ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}