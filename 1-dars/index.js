const randomNum = Math.floor(Math.random() * 20);
console.log(randomNum);
const confirmation = confirm(
  "Kompyuter 0 dan 20 gacha son o'yladi siz bu sonni topa olasizmi? "
);
if (confirmation) {
  let guess = Number(prompt("O'ylagan soningizni kiriting: "));
  let attempt = 0;
  while (guess != randomNum) {
    if (guess < randomNum) {
      guess = prompt("Men o'ylagan son bundan kattaroq");
    } else {
      guess = prompt("Men o'ylagan son bundan kichikroq");
    }
    attempt++;
  }
  attempt++;
  alert(
    `Tabriklayman siz meni yutdingiz, men rostdan ham ${randomNum} sonini o'ylagandim\nSiz ${attempt} ta urinishda toptingiz, Barakalla!`
  );
} else {
  window.location.href = "https://fulfiledu.uz";
}
