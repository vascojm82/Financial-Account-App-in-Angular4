import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sortBy"
})

export class SortPipe implements PipeTransform{
    transform(array: Array<any>, args: any, reverse: boolean = false): any {
        if (array === undefined)
            return;

        const m = reverse ? -1 : 1;

        if(args === "id")
        {
            array.sort((a: any, b: any) => {
              if ( a[args].match(/\d+/) < b[args].match(/\d+/) ){
                  return -1*m;
              }else if( a[args].match(/\d+/) > b[args].match(/\d+/) ){
                  return 1*m;
              }else{
                  return 0;
              }
            });
        } else{
            array.sort((a: any, b: any) => {
              if ( a[args] < b[args] ){
                  return -1*m;
              }else if( a[args] > b[args] ){
                  return 1*m;
              }else{
                  return 0;
              }
            });
        }

      return array;
    }
}
