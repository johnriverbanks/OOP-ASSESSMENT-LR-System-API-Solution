export interface BankHolidayOrigin {
    getBankHolidays(): Promise<Set<string>>;
}