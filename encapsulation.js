// proses membungkus data di suatu wadah (class)
// menyembunyikan data bagian dari encapsulation
// membuat data yang ada menjadi private

class CoffeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemprature();
  }

  set temperature(temperature) {
    console.log("You are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemprature() {
    return 90;
  }
}

// # untuk membuat hak akses perivate
