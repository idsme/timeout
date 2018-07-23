import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'entries'})
export class EntriesPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

// Usage:
// <span *ngFor="let entry of content | keys">
//   Key: {{entry.key}}, value: {{entry.value}}
// </span>
