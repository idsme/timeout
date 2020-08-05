import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'rate'
})
export class RatePipe implements PipeTransform {

    blah = 5;

    public transform(milliSeconds: number, rate = 0): string {

        let result = '0';
        if (rate && milliSeconds !== 0) {
            // how much time has passed sinds start
            const hours = milliSeconds / 3600000;
            console.log('hours worked', result);
            const earnings = hours * rate;
            result = earnings + '';
        }
        return result;
    }

}
