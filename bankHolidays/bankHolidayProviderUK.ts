import { BankHolidayOrigin } from "./bankHolidaysOrigin";
import { bankHolidaysUKRegions } from "./bankHolidayUKRegions";


export class bankHoldayProviderUK implements BankHolidayOrigin{
    canHandle(country: string): boolean {
        return country.toUpperCase() in bankHolidaysUKRegions;
    }

    async getBankHolidays(country: string): Promise<Set<string>> {

        const response = await fetch("https://www.gov.uk/bank-holidays.json");
        const data = await response.json();

        const regionKey =
            bankHolidaysUKRegions[country.toUpperCase()as keyof typeof bankHolidaysUKRegions];

        return data[regionKey]?.events || [];
    }
}