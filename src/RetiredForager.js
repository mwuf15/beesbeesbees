var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble'
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype.forage = function(){
  return 'I am too old, let me play cards instead'
};

RetiredForagerBee.prototype.eat = function(){
  Grub.call(this);
};

RetiredForagerBee.prototype.gamble = function(treasure){
  // ForagerBee.call(this);
  this.treasureChest.push(treasure)

}