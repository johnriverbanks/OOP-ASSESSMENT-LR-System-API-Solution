import { BankHolidayOrigin } from "./bankHolidaysOrigin";

export class bankHolidayProviderRegistry {

    constructor(private providers: BankHolidayOrigin[]) {}

    getOrigin(country: string): BankHolidayOrigin {

        const origin = this.providers.find(provider =>
            provider.canHandle(country)
        );

        if (!origin) {
            throw new Error("No provider found for country");
        }

        return origin;
    }
}