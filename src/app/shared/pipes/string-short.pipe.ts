import { Pipe, PipeTransform } from '@angular/core';
//use this pipe if the address is large than 50 chars then we add "..."in the end of 50 chars.
@Pipe({
  name: 'appStringShort'
})
export class StringShortPipe implements PipeTransform {
  transform(str: string, strLength: number = 50) {
    let addStr = (str.length >= strLength) ? "..." : "";
    return str.slice(0, strLength)+addStr;
  }
}
