import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-api1';
  name = 'Jersson';
  age = 20;
  img = "https://source.unsplash.com/random";
  btnDisabled= true
  person ={
    name:'Jersson',
    age: 25,
    avatar:"https://source.unsplash.com/random"
  }
  names: string[] =['Nico','Juli','Santi']
  newName=''
  toogleButton(){
    this.btnDisabled=!this.btnDisabled
  }
  Increment_Age(){
    this.person.age++;
  }
  onScroll(event: Event ){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName='';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }

}
