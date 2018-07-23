import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
      keys.push(key);
    }
    return keys;
  }
}

// Usage:
// <tr *ngFor="let c of content">
// <td *ngFor="let key of c | keys">{{key}}: {{c[key]}}</td>
// </tr>
