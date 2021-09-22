let randomChange = 0;
let randomNumber = [...Array(19).keys()];

var setInterval = setInterval(() => {
  randomChange = Math.floor(Math.random() * 100);
  if (randomChange % 2 == 0) {
    for (let i = 0; i < randomNumber.length; i++) {
      if (i % 2 == 0) {
        randomNumber[i] = Math.floor(Math.random() * 100);
      } else {
        randomNumber[i] = randomNumber[i];
      }
    }
  } else {
    for (let i = 0; i < randomNumber.length; i++) {
      if (i % 2 != 0) {
        randomNumber[i] = Math.floor(Math.random() * 100);
      } else {
        randomNumber[i] = randomNumber[i];
      }
    }
  }

  document.body.style.setProperty(
    "--main-linear-gradient",
    "linear-gradient(217deg, rgba(" +
      randomNumber[1] +
      "," +
      randomNumber[2] +
      "," +
      randomNumber[3] +
      ",.8), rgba(" +
      randomNumber[4] +
      "," +
      randomNumber[5] +
      "," +
      randomNumber[6] +
      ",0) 70.71%), linear-gradient(127deg, rgba(" +
      randomNumber[7] +
      "," +
      randomNumber[8] +
      "," +
      randomNumber[9] +
      ",.8), rgba(" +
      randomNumber[10] +
      "," +
      randomNumber[11] +
      "," +
      randomNumber[12] +
      ",0) 70.71%), linear-gradient(336deg, rgba(" +
      randomNumber[13] +
      "," +
      randomNumber[14] +
      "," +
      randomNumber[15] +
      ",.8), rgba(" +
      randomNumber[16] +
      "," +
      randomNumber[17] +
      "," +
      randomNumber[18] +
      ",0) 70.71%)"
  );
}, 1000);
