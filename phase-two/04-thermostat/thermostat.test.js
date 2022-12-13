const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('getTemperature()', () => {
    it('returns the 20 before its been altered', () => {
      expect(thermostat.getTemperature()).toBe(20);
    });
  });

  describe('up()', () => {
    it('increments temperature by 1', () => {
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(22);
    });

    it('cannot rise above 32 if powerSavingMode is off', () => {
      thermostat.setPowerSavingMode(false)
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(32);

      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(32);
    });
  });

  describe('down()', () => {
    it('decrements temperature by 1', () => {
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it('cannot drop below 10 degrees', () => {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(10);

      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(10);
    });
  });

  describe('setPowerSavingMode(bool)', () => {
    it('stops user from increasing temp above 25 if on, mode is on by default', () => {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(25);

      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toBe(25);

      thermostat.setPowerSavingMode(false);
      expect(thermostat.getTemperature()).toBe(25);
      
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(26);

      thermostat.setPowerSavingMode(true);
      expect(thermostat.getTemperature()).toBe(25);
    });
  });

  describe('reset()', () => {
    it('resets the temperature to 20', () => {
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(23);

      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    });
  });

  describe('getEnergyUsage()', () => {
    it('returns low if temp < 18', () => {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(17);
      expect(thermostat.getEnergyUsage()).toBe('Low');
    });

    it('returns medium if temp is between 18 and 25 inclusive', () => {
      expect(thermostat.getTemperature()).toBe(20);
      expect(thermostat.getEnergyUsage()).toBe('Medium');
    });
    
    it('returns high if temp > 26', () => {
      thermostat.setPowerSavingMode(false);
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(27);
      expect(thermostat.getEnergyUsage()).toBe('High');
    });
  });
});