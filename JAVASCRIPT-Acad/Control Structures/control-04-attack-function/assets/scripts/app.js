//  Game - Monster attack 
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

// adding the variables
let chosenIrieLife = 100;
let currentMonsterHealth = chosenIrieLife;
let currentPlayerHealth = chosenIrieLife;

adjustHealthBars(chosenIrieLife);

function attackHandler() {
  // it is const because this value won't change for this function execution
  // the UI is updated by the dealMonsterDamage function, and with that we should be able to attack the monster with a normal attack
  const damage = dealMonsterDamage(ATTACK_VALUE);
  // this means that currentMonsterHealth is set equal to currentMonsterHealth minus damage
  currentMonsterHealth -= damage;
  //if(...)
const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert('You won!');
  }else if (currentPlayerHealth <= 0){
    alert('You Lost!');

  }
}

attackBtn.addEventListener('click', attackHandler);