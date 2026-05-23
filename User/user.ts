import { FullName } from "./fullName";
import { UserRole } from "./userRoleEnum";
import { validateCountry } from "../Validation/validateCountry";

export abstract class User {

    constructor (
        private fullName: FullName,
        public readonly country: string,
        private role: UserRole,
        private readonly email: string,
        private readonly password: string,
        private readonly salt: string,
    ) { 

    }
}