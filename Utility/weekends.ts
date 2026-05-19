export class weekends {

    static isAWeekend(date: Date): boolean {
        const day = date.getDay();
        return day === 0 || day === 6;
    }
}