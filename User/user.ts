import { Country } from "../Utility/countryBankHolidays.ts/countryEnum";
import { FullName } from "./fullName";
import { UserRole } from "./userRoleEnum";

export abstract class User {

    constructor (
        private readonly fullName: FullName,
        private readonly country: Country,
        private readonly role: UserRole,
        private readonly email: string,
        private readonly password: string,
        private readonly salt: string,

    ) { 

    }

}