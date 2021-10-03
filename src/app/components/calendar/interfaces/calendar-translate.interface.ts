export interface ICalendarTranslate {
    getDay(day: number): string;
    getShortDay(day: number): string;
    getMonth(month: number): string;
    getShortMonth(month: number): string;
    getFullDate(d: Date): string;
    getTranslation(t: CalendarTranslation): string;
}

export type CalendarTranslation = 'more-events' | 
                                  'no-events' |
                                  'next' |
                                  'previous';