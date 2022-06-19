import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindof:string): string{
        if(kindof === 'lower'){
            value = value.toLowerCase()
        }else{
            value = value.toUpperCase()
        }
        return value
    }
}