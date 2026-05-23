import { Employee } from "../User/employee";

export class bankHolidayPendingRepo {

    private store = new Map<string, Employee>();

    private key(id: number, country: string) {
        return `${id}:${country.toUpperCase()}`;
    }

    add(awaiting: Employee, country: string) {
        this.store.set(
            this.key(awaiting.getEmployeeId(), country), awaiting);
    }

    get(employeeId: number, country: string) {
        return this.store.get(
            this.key(employeeId, country)) || null;
    }

    remove(employeeId: number, country: string) {
        this.store.delete(
            this.key(employeeId, country));
    }
}