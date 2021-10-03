export interface ICalendarTranslate {
    getDay(day: number): string;
    getShortDay(day: number): string;
    getMonth(month: number): string;
    getShortMonth(month: number): string;
}