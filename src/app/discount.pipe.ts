import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})
export class DiscountPipe implements PipeTransform {
    transform(value, percent) {
        if(percent) {
            return (value - percent/100 * value);
        }
        else {
            return (value - 0.1 * value);
        }
    }
}