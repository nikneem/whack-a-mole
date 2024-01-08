import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timer' })
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    const seconds = Math.floor(value / 1000);
    const milliseconds = Math.floor(value % 1000);
    return `${seconds}:${milliseconds}`;
  }
}
