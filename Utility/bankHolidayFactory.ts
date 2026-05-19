import { Country } from "./countryBankHolidays.ts/countryEnum";
import { BankHolidayOrigin } from "./bankHolidays";
import { EnglandWalesBankHolidays } from "./countryBankHolidays.ts/englandWales";
import { ScotlandBankHolidays } from "./countryBankHolidays.ts/scotland";
import { NorthernIrelandBankHolidays } from "./countryBankHolidays.ts/northernIreland";

export class BankHolidayFactory {

    static create (country: Country): BankHolidayOrigin {
        switch (country) {
            case Country.England || Country.Wales:
                return new EnglandWalesBankHolidays();

            case Country.Scotland:
                return new ScotlandBankHolidays();
            
            case Country.NorthernIreland:
                return new NorthernIrelandBankHolidays();

            default:
                throw new Error("Invalid country provided");
        }
    }
}