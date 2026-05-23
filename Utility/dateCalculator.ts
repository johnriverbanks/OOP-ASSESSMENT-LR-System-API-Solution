import { bankHolidayProviderRegistry } from "../bankHolidays/bankHolidayProviderRegistry";
import { weekends } from "./weekends";
import { formatDate } from "./FormatDate";

export class DateCalculator {

    constructor(private registry: bankHolidayProviderRegistry) {}

    async calculateLeaveDays(startDate: Date, endDate: Date, country: string): Promise<number> {

        let workingDays = 0;

        const leaveStart = new Date(startDate);
        const provider = this.registry.getOrigin(country);
        const bankHolidaySet = await provider.getBankHolidays(country);

        while (leaveStart <= endDate) {
            const isAWeekend = weekends.isAWeekend(leaveStart);
            const formattedDate = formatDate(leaveStart);
            const isABankHoliday = bankHolidaySet.has(formattedDate);

            if (!isAWeekend && !isABankHoliday) {
                workingDays++;
            }

            leaveStart.setDate(leaveStart.getDate() + 1);
        }

        return workingDays;
    }
}