import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, carMaker: any, carModel:any,modelYear:any,textFilter:any): any {
      let find:boolean=false;
   if (!carMaker && !carModel && !modelYear && !textFilter)//the defult is to show all
    return items;
    return items.filter(function(item){
      if(carMaker && !item.CarTypeId.ModelMake.toLowerCase().includes(carMaker.toLowerCase()))return false;
      if(carModel && !item.CarTypeId.ModelName.toLowerCase().includes(carModel.toLowerCase())) return false;
      if(modelYear && !item.CarTypeId.ModelYear.toLowerCase().includes(modelYear.toLowerCase())) return false;
     /* if(textFilter){
        for(var element in item){
            console.log(element);
            if(element.toLowerCase().includes(textFilter.toLowerCase())){
                find=true;         
        }
    };      
    return find;        
}*/
return true;
});
}
}