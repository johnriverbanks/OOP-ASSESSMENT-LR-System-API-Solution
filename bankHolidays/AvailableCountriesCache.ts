import fs from "fs";

export class availableCountriesCache {
    private lastUpdate: Date | null = null;

    constructor(private filePath: string = "../AvailableCountries.json") {}

    async getAvailableCountries() {
        if (!this.isUpToDate()) {
            await this.refresh();
        }
        return JSON.parse(fs.readFileSync(this.filePath, 
            "utf-8"));
    }

    private isUpToDate(): boolean {
        if (!this.lastUpdate) return false;
        return this.lastUpdate.toDateString() === new Date().toDateString();
    }

    private async refresh() {
        const response = await fetch("https://date.nager.at/api/v3/AvailableCountries");
        const data = await response.json();

        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
        this.lastUpdate = new Date();
    }
}