import { BankHolidayFactory } from "./bankHolidayFactory";
import { Country } from "./countryBankHolidays.ts/countryEnum";
import { weekends } from "./weekends";

export class DateCalculator {
    static async calculateLeaveDays(
        startDate: Date, 
        endDate: Date,
        country: Country
    ): Promise<number> {

        let workingDays = 0;

        const leaveStart = new Date(startDate);
        const bankHolidayFactory = BankHolidayFactory.create(country);
        const bankHolidaySet = await bankHolidayFactory.getBankHolidays();

        while (leaveStart <= endDate) {
            const isAWeekend = weekends.isAWeekend(leaveStart);
            const formattedDate = leaveStart.toISOString().split('T')[0];
            const isABankHoliday = bankHolidaySet.has(formattedDate);

            if (!isAWeekend && !isABankHoliday) {
                workingDays++;
            }

            leaveStart.setDate(leaveStart.getDate() + 1);
        }

        return workingDays;
    }
}