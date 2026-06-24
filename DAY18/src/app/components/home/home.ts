import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Api } from '../../services/api';

@Component({

selector:'app-home',

imports:[CommonModule],

templateUrl:'./home.html',

styleUrl:'./home.css'

})

export class Home{

posts:any=[];

constructor(private api:Api){}

loadPosts(){

this.api.getPosts().subscribe({

next:(res:any)=>{

this.posts=res.slice(0,10);

},

error:(err)=>{

console.log(err);

}

})

}

}