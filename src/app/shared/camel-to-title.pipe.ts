import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name:'camelToTitle'
})
export class CamelToTitle implements PipeTransform{
    transform(value: string) {
        let newVal = value.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
        newVal = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        return newVal;
    }
}