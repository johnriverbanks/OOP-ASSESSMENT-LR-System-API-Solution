import { BankHolidayOrigin } from "../bankHolidays";

export class NorthernIrelandBankHolidays implements BankHolidayOrigin {

    private cache: Set<string> | null = null;

    async getBankHolidays(): Promise<Set<string>> {
        if (this.cache) {
            return this.cache;
        }

        const response = await fetch("https://www.gov.uk/bank-holidays.json");
        const data = await response.json();
        const northernIrelandBankHolidays = data["northern-ireland"].events.map((event: { date: string }) => event.date);
        this.cache = new Set(northernIrelandBankHolidays);
        return this.cache;
    }
}