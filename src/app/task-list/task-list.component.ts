import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 // var checkList = document.getElementById('list1');
        // checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
        //     if (checkList.classList.contains('visible'))
        //         checkList.classList.remove('visible');
        //     else
        //         checkList.classList.add('visible');
        // }

        // checkList.onblur = function(evt) {
        //     checkList.classList.remove('visible');
        // }