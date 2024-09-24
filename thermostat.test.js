const Thermostat = require('./thermostat')

describe('getTemperature', () => {
    it('getTemperature returns current temp', () => {
        let thermostat = new Thermostat(21);
        expect(thermostat.getTemperature()).toEqual(21)
    });
});


describe('thermostat.up', () => {
    it('adds 1 to current temperature', () => {
        let thermostat = new Thermostat(15);
        expect(thermostat.up()).toEqual(16);
    });
});

describe('thermostat.down', () => {
    it('removes 1 from current temperature', () => {
        let thermostat = new Thermostat(19);
        expect(thermostat.down()).toEqual(18);
    });
});


describe('setPowerSavingMode = true', () => {
    it('if true, max temp is 25', () => {
        let thermostat = new Thermostat(25);
        thermostat.setPowerSavingMode(true);

        thermostat.up();

        expect(thermostat.getTemperature()).toEqual(25);
    });
});

describe('setPowerSavingMode = false', () => {
    it('if false, max temp is 32', () => {
        let thermostat = new Thermostat(32);
        thermostat.setPowerSavingMode(false);

        thermostat.up();

        expect(thermostat.getTemperature()).toEqual(32);
    });
});

describe('setPowerSavingMode = true', () => {
    it('max temp is 25', () => {
        let thermostat = new Thermostat(22);
        thermostat.setPowerSavingMode(true);

        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();

        expect(thermostat.getTemperature()).toEqual(25);
    });
});


describe('reset', () => {
    it('reset temp to 20', () => {
        let thermostat = new Thermostat(12);

        thermostat.reset();

        expect(thermostat.getTemperature()).toEqual(20);
    });
});

describe('usage low', () => {
    it('below 18 is low', () => {
        let thermostat = new Thermostat(17);
        expect(thermostat.usage()).toBe("low-usage");
    });
});

describe('usage med', () => {
    it('below 25 is medium', () => {
        let thermostat = new Thermostat(24);
        expect(thermostat.usage()).toBe("medium-usage");
    });
});

describe('usage high', () => {
    it('above 25 is high', () => {
        let thermostat = new Thermostat(26);
        expect(thermostat.usage()).toBe("high-usage");
    });
});

describe('usage 18', () => {
    it('18 is med', () => {
        let thermostat = new Thermostat(18);
        expect(thermostat.usage()).toBe("medium-usage");
    });
});

describe('usage 25', () => {
    it('25 is medium', () => {
        let thermostat = new Thermostat(24);
        expect(thermostat.usage()).toBe("medium-usage");
    });
});

describe('usage 32', () => {
    it('32 is high', () => {
        let thermostat = new Thermostat(32);
        expect(thermostat.usage()).toBe("high-usage");
    });
});