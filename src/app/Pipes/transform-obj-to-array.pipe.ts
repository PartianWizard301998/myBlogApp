import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformObjToArray',
  standalone: true
})
export class TransformObjToArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    return JSON.stringify(value, null, 2);
  }

}
