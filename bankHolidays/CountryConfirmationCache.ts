export class CountryConfirmationCache {

    private cache = new Map<string, number>();
    private ttlMs = 10 * 60 * 1000;
    private key(employeeId: number, country: string): string {
        return `${employeeId}:${country.toUpperCase()}`;
    }

    hasConfirmed(employeeId: number, country: string): boolean {
        const key = this.key(employeeId, country);
        const timestamp = this.cache.get(key);

        if (!timestamp) return false;

        if (Date.now() - timestamp > this.ttlMs) {
            this.cache.delete(key);
            return false;
        }
        return true;
    }

    markSeen(employeeId: number, country: string): void {
        const key = this.key(employeeId, country);
        this.cache.set(key, Date.now());
    }

    clear(employeeId: number, country: string): void {
        this.cache.delete(this.key(employeeId, country));
    }

    size(): number {
        return this.cache.size;
    }
}