export class NumberUtils {
    static pad(value: number, size: number): string {
        const v = value.toString();
        if(v.length >= size) {
            return v;
        } else {
            return new Array((size + 1) - v.length).join('0') + v;
        }
    }
}