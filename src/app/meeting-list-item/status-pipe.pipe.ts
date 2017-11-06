import { Pipe, PipeTransform } from '@angular/core';
import { MeetingMember,MeetingModel } from '../Interfaces';


@Pipe({
	name: 'StatusPipe'
})

export class StatusPipe implements PipeTransform {

	dictionary = {
		"done": "Done",
		"in_progress": "In Progress",
		"upcoming": "Upcoming"
	}

	transform(status: string) {
		return this.dictionary[status];
	}

}