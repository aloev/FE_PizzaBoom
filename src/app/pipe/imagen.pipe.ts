import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string , tipo: '' ): string {


    return '../../../assets/img/img';
  }

}
