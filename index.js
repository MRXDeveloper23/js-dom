//Currency converter from UZS to USD or EUR

const uzs=prompt("Pul miqdorini kiriting(UZSda): ");
const usd= uzs / 10654;
const eur = uzs / 12674;

const converter = (currency, value, sign) => {
  alert(`${currency.toUpperCase()}da\n\tYaxlitlanmagan: ${sign}${value}\n\tYaxlitlangan: ${sign}${Math.round(value)}`);
}
converter("usd", usd, "$");
converter("eur", eur, "€");
