//task-2
function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16)); // Очікується "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // Очікується "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // Очікується "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // Очікується "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // Очікується "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // Очікується "Nunc sed turpis a felis in nunc fringilla"
