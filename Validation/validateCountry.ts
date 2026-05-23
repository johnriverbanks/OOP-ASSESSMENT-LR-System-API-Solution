import { bankHolidaysUKRegions } from "../bankHolidays/bankHolidayUKRegions";
import { availableCountriesCache } from "../bankHolidays/AvailableCountriesCache";
import { CountryConfirmationCache } from "../bankHolidays/CountryConfirmationCache";


export class validateCountry {

        constructor(
        private countryCache: availableCountriesCache,
        private confirmationCache: CountryConfirmationCache
    ) {}

async validate(employeeId: number, country: string): Promise<"ACCEPT" | "RETRY"> {

    const formatted = country.toUpperCase();

        if (this.confirmationCache.hasConfirmed(employeeId, formatted)) {
            return "ACCEPT";
        }

    if (formatted in bankHolidaysUKRegions) {
        this.confirmationCache.markSeen(employeeId, formatted);
        return "RETRY";
    }

    const countries = await this.countryCache.getAvailableCountries();

    const exists = countries.some((c: any) =>
        c.countryCode.toUpperCase() === formatted ||
        c.name.toUpperCase() === formatted
    );

    if (exists) {
        this.confirmationCache.markSeen(employeeId, formatted);
        return "RETRY";
    }

    this.confirmationCache.markSeen(employeeId, formatted);
    return "RETRY";

}
}