import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk',
  standalone: true
})
export class ChunkPipe implements PipeTransform {
  transform(arr: any[], chunkSize: number): any[][] {
    if (!arr?.length) {
      return [];
    }
    return arr.reduce((acc, _, i) => {
      if (i % chunkSize === 0) {
        acc.push(arr.slice(i, i + chunkSize));
      }
      return acc;
    }, []);
  }
}

