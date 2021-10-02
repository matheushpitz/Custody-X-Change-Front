export class DateUtils {
    public static getCurrentYearMonth(): Date {
        const current = new Date();
        return this.getFirstDayOfDate(current);
    }

    public static getFirstDayOfDate(d: Date): Date {
        d.setDate(1);
        this.ignoreHours(d);

        return d;
    }

    public static getLastDayOfMonth(d: Date): Date {
        d.setMonth(d.getMonth() + 1);
        d.setDate(0);
        this.ignoreHours(d);

        return d;
    }

    public static ignoreHours(d: Date): Date {
        d.setHours(0, 0, 0, 0);

        return d;
    }
}