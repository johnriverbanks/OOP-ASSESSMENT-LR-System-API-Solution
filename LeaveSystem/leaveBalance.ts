import { ValidateLeave } from "../Validation/validateLeave";

export class LeaveBalance {
    constructor(
        private balance: number
    ) {
    }

deductBalance(balance: number): LeaveBalance {

        return new LeaveBalance(
            this.balance - balance
        );
    }

}