const money = prompt("Pul miqdorini kiriting(UZSda): ");
const ticket = 500 * 9433.34;
const hotelFee = 250 * 9433.34;
const trip = 120 * 10354.03;
const sum = ticket + hotelFee + trip;

if (money >= sum) {
  console.log("Oq yo’l, Alisher!");
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}
