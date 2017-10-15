import { Pipe, PipeTransform } from '@angular/core';
import { MeetingMember } from '../Interface';
import { MeetingModel } from '../Interface';


 

@Pipe({
  name: 'statusPipe'
}) 


export class statusPipe implements PipeTransform {

 dictionary = {
 	"done": "Done",
 	"in_progress": "In Progress",
 	"upcoming": "Upcoming"
 }

  transform(status: string) {
  	return this.dictionary[status];

   
   
  }
}