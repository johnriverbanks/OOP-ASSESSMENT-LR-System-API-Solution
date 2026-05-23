export interface BankHolidayOrigin {
    canHandle(country: string): boolean;
    getBankHolidays(country: string): Promise<Set<string>>;
}