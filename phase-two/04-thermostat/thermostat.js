class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingModeOn = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if ((this.powerSavingModeOn === true && this.temperature >= 25) || this.temperature >= 32) {}
    else { this.temperature += 1 };
  }

  down() {
    if (this.temperature > 10) this.temperature -= 1;
  }

  setPowerSavingMode(bool) {
    this.powerSavingModeOn = bool;
    if (this.powerSavingModeOn === true && this.temperature > 25) this.temperature = 25;
  }

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'Low';
    } else if (this.temperature < 26) {
      return 'Medium';
    } else {
      return 'High';
    }
  }

  reset() {
    this.temperature = 20;
  }
}

module.exports = Thermostat;