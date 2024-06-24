import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe',
  standalone: true
})
export class SearchpipePipe implements PipeTransform {

  transform(items: any[], search_filter:any):any {
    if (!items) return null;
    if (!search_filter) return items;
 
    search_filter = search_filter.toLowerCase();
   
    return items.filter(function(item:any) {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(search_filter);
        
    });

    
  }

}
