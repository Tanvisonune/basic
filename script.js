function orderNow(foodItem) {
  alert(`You ordered: ${foodItem}. Thank you! 🍽️`);
}
// 1. Greeting Based on Time of Day
window.onload = function () {
  const now = new Date().getHours();
  let greeting = "";

  if (now < 12) {
    greeting = "Good morning!";
  } else if (now < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  alert(`${greeting} Welcome to FoodieDelight!`);
}


