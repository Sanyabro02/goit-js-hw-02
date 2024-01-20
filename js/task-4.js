// task-4
function getShippingCost(country) {
  let price;

  switch (country.toLowerCase()) {
    case 'china':
      price = 100;
      break;
    case 'chile':
      price = 250;
      break;
    case 'australia':
      price = 170;
      break;
    case 'jamaica':
      price = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }

  return `Shipping to ${country} will cost ${price} credits`;
}

// Перевірка роботи функції
console.log(getShippingCost('Australia')); // Очікується "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // Очікується "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // Очікується "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // Очікується "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // Очікується "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // Очікується "Sorry, there is no delivery to your country"
