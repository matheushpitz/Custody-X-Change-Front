import { ICalendarTranslate, CalendarTranslation } from '../components/calendar/interfaces/calendar-translate.interface';
import { Injectable } from '@angular/core';
import { NumberUtils } from '../utils/number.utils';

class PortugueseCalendarTranslate implements ICalendarTranslate {
    getTranslation(t: CalendarTranslation): string {
        switch(t) {
            case 'more-events':
                return 'outros...';
            case 'no-events':
                return 'Nenhum evento para esta data';
            case 'next':
                return 'Próximo';
            case 'previous':
                return 'Anterior';
        }
    }       
    getShortDay(day: number): string {
        switch(day) {
            case 0:
                return 'Dom';
            case 1:
                return 'Seg';
            case 2:
                return 'Ter';
            case 3:
                return 'Qua';
            case 4:
                return 'Qui';
            case 5:
                return 'Sex';
            case 6:
                return 'Sab';
            default:
                return '';
        }
    }
    getDay(day: number): string {
        switch(day) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda';
            case 2:
                return 'Terça';
            case 3:
                return 'Quarta';
            case 4:
                return 'Quinta';
            case 5:
                return 'Sexta';
            case 6:
                return 'Sábado';
            default:
                return '';
        }
    }
    getShortMonth(month: number): string {
        switch(month) {
            case 0:
                return 'Jan';
            case 1:
                return 'Fev';
            case 2:
                return 'Mar';
            case 3:
                return 'Abr';
            case 4:
                return 'Mai';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Ago';
            case 8:
                return 'Set';
            case 9:
                return 'Out';
            case 10:
                return 'Nov';
            case 11:
                return 'Dez';
            default:
                return '';
        }
    }
    getMonth(month: number): string {
        switch(month) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
            default:
                return '';
        }
    }
    getFullDate(d: Date): string {
        return `${this.getDay(d.getDay())}, ${NumberUtils.pad(d.getDate(), 2)} de ${this.getMonth(d.getMonth())} de ${d.getFullYear()}`
    } 
}

class EnglishCalendarTranslate implements ICalendarTranslate {
    getTranslation(t: CalendarTranslation): string {
        switch(t) {
            case 'more-events':
                return 'more...';
            case 'no-events':
                return 'No events for this day';
            case 'next':
                return 'Next';
            case 'previous':
                return 'Previous';
        }
    }       
    getShortDay(day: number): string {
        switch(day) {
            case 0:
                return 'Sun';
            case 1:
                return 'Mon';
            case 2:
                return 'Tue';
            case 3:
                return 'Wed';
            case 4:
                return 'Thu';
            case 5:
                return 'Fri';
            case 6:
                return 'Sat';
            default:
                return '';
        }
    }
    getDay(day: number): string {
        switch(day) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return '';
        }
    }
    getShortMonth(month: number): string {
        switch(month) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
            default:
                return '';
        }
    }
    getMonth(month: number): string {
        switch(month) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            default:
                return '';
        }
    }
    getFullDate(d: Date): string {
        return `${this.getDay(d.getDay())}, ${NumberUtils.pad(d.getDate(), 2)} ${this.getMonth(d.getMonth())} ${d.getFullYear()}`
    } 
}

@Injectable()
export class MultiLanguageCalendarTranslate implements ICalendarTranslate {

    private isEnglish: boolean = true;
    private dictionaries = { 'pt-br': new PortugueseCalendarTranslate(), 'en-us': new EnglishCalendarTranslate() }

    getDay(day: number): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getDay(day);
        } else {
            return this.dictionaries["pt-br"].getDay(day);
        }
    }
    getShortDay(day: number): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getShortDay(day);
        } else {
            return this.dictionaries["pt-br"].getShortDay(day);
        }
    }
    getMonth(month: number): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getMonth(month);
        } else {
            return this.dictionaries["pt-br"].getMonth(month);
        }
    }
    getShortMonth(month: number): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getShortMonth(month);
        } else {
            return this.dictionaries["pt-br"].getShortMonth(month);
        }
    }
    getFullDate(d: Date): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getFullDate(d);
        } else {
            return this.dictionaries["pt-br"].getFullDate(d);
        }
    }
    getTranslation(t: CalendarTranslation): string {
        if(this.isEnglish) {
            return this.dictionaries["en-us"].getTranslation(t);
        } else {
            return this.dictionaries["pt-br"].getTranslation(t);
        }
    }
    
    switchLanguage() {
        this.isEnglish = !this.isEnglish;
    }
}