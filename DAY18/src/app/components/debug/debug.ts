import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorLog } from '../../services/error-log';

@Component({

selector:'app-debug',

imports:[CommonModule],

templateUrl:'./debug.html',

styleUrl:'./debug.css'

})

export class Debug{

errors:string[]=[];

constructor(private log:ErrorLog){

this.errors=this.log.getErrors();

}

}