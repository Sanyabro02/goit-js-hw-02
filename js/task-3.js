//task-3
function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();

  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}

console.log(checkForSpam('Latest technology news')); // Очікується false
console.log(checkForSpam('JavaScript weekly newsletter')); // Очікується false
console.log(checkForSpam('Get best sale offers now!')); // Очікується true
console.log(checkForSpam('Amazing SalE, only tonight!')); // Очікується true
console.log(checkForSpam('Trust me, this is not a spam message')); // Очікується false
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // Очікується true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // Очікується true
