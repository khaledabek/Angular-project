import {Injectable} from '@angular/core';

@Injectable()
export class functions{
  static checkId(id:string){
        let  idSub:number=Number(id);
        if(id.length==9 && !(idSub=isNaN(Number(id))?NaN:Number(id)))
        for (let index = 0; index < id.length; index++) {
          let sub:number=0;
          sub+=(idSub%10);
          idSub=idSub/10;
        }
        if(idSub%10==0) return true;
       }
        static getTheDate(yearDate:number){//ensert how many years to add to today date.
        let today:Date = new Date();
        let dd:number = today.getDate();
        let d:string;
        let m:string;
        let theDate:string;
        var mm = today.getMonth()+1; //January is 0!
        var y= today.getFullYear()+yearDate;
         d=dd<10?('0'+dd):dd.toString();
         m=mm<10?('0'+mm):mm.toString();
         return(y+'-'+m+'-'+d)
     
      }
}