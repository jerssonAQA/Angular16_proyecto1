import { Component } from '@angular/core';
import { Product } from './product.model';

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
  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      //image: './assets/images/toy.jpg',
      image: 'https://source.unsplash.com/random',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      //image: './assets/images/bike.jpg'
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      //image: './assets/images/album.jpg'
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Mis libros',
      price: 23,
      //image: './assets/images/books.jpg'
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Casa para perro',
      price: 34,
      //image: './assets/images/house.jpg'
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Gafas',
      price: 3434,
      //image: './assets/images/glasses.jpg'
      image: 'https://source.unsplash.com/random',
    }
  ]

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
