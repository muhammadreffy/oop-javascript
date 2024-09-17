// pewarisan

class Smartphones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class IOS extends Smartphones {
  airdrop() {
    console.log("IOS have a behavior AirDrop");
  }
}

class Android extends Smartphones {
  splitScreen() {
    console.log("Android have a split screen");
  }
}

const ios = new IOS("black", "B", "14 Pro Max");
const android = new Android("blue", "A", "Xiaomi Poco X3 NFC");

console.log(ios);
console.log(android);

ios.charging();
ios.airdrop();

android.charging();
android.splitScreen();

// mennguji apakah suatu object merupakan instance dari sebuah class atau constructor function tertentu
// jika object tersebut merupakan instance dari kelas yang diuji, nilainya akan true. jika tidak, nilainya akan false
console.log(ios instanceof Smartphones);
console.log(android instanceof Smartphones);
