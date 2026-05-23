import { BankHolidayOrigin } from "./bankHolidaysOrigin";

export class NagerBankHolidayProvider implements BankHolidayOrigin {

    canHandle(country: string): boolean {
        return true; // fallback provider
    }

    async getBankHolidays(country: string): Promise<Set<string>> {
        const res = await fetch(
            `https://date.nager.at/api/v3/PublicHolidays/${new Date().getFullYear()}/${country}`
        );

        return res.json();
    }
}