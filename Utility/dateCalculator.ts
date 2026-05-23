import { weekends } from "./weekends";
import { formatDate } from "./FormatDate";

export class DateCalculator {

    async calculateLeaveDays(startDate: Date, endDate: Date, bankHolidays: Set<string>): Promise<number> {

        let workingDays = 0;

        const leaveStart = new Date(startDate);
        const leaveEnd = new Date(endDate)

        while (leaveStart <= leaveEnd) {
            const formattedDate = formatDate(leaveStart);
            const isAWeekend = weekends.isAWeekend(leaveStart);
            const isABankHoliday = bankHolidays.has(formattedDate);

            if (!isAWeekend && !isABankHoliday) {
                workingDays++;
            }

            leaveStart.setDate(leaveStart.getDate() + 1);
        }

        return workingDays;
    }
}