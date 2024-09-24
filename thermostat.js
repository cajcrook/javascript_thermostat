class Thermostat {
    constructor(temperature = 20) { 
        this.temperature = temperature; 
        this.powerSavingMode = true;
        this.MAX_TEMP_PSM_ON = 25;
        this.MAX_TEMP_PSM_OFF = 32;
    };

    getTemperature() {
        return this.temperature
    }

    up() {
        let maxTemp = this.powerSavingMode ? this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF;
        if (this.temperature < maxTemp) {
            this.temperature += 1;
        }
        return this.temperature;
    }

    down() {
        if(this.temperature >= 10) {
            this.temperature -= 1;
        }
        return this.temperature;
    }

    setPowerSavingMode(mode) {
        this.powerSavingMode = mode;
        if(this.powerSavingMode && this.temperature > this.MAX_TEMP_PSM_ON) {
            this.temperature = this.MAX_TEMP_PSM_ON;
        }
    }

    reset() {
        this.temperature = 20
    }

    usage() {
        if (this.temperature < 18) {
            return "low-usage"; 
        }
        else if (this.temperature <= 25) {
            return "medium-usage"; 
        }
        else { return "high-usage";
        };
    };
};

module.exports = Thermostat
