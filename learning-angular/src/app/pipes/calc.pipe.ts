import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc'
})
export class CalcPipe implements PipeTransform {
  // Data
  transform(value1: any, value2: any) {
    let oper = `
      Add: ${value1 + value2} -
      Substraction: ${value1 - value2} -
      Mult: ${value1 * value2} -
      Div: ${value1 / value2}
    `;
    return oper;
  }
}
