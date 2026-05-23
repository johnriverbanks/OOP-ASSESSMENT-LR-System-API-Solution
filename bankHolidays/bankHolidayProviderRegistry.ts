import { BankHolidayOrigin } from "./bankHolidaysOrigin";

export class bankHolidayProviderRegistry {

    constructor(private providers: BankHolidayOrigin[]) {}

    getOrigin(country: string): BankHolidayOrigin {

        const origin = this.providers.find(p =>
            p.canHandle(country)
        );

        if (!origin) {
            throw new Error("No provider found for country");
        }

        return origin;
    }
}