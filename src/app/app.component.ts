import { Component } from '@angular/core';

export interface PeriodicElement {
    name: string;
    position: number;
    pages: number;
    author: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'C Programming', pages: 500, author: 'Miguel de Cervantes'},
    {position: 2, name: 'C++ Programming', pages: 650, author: 'Bjarne Stroustrup'},
    {position: 3, name: 'Java Programming', pages: 575, author: 'James Gosling'},
    {position: 4, name: 'Operating System', pages: 623, author: 'Abraham Silberschatz'},
    {position: 5, name: 'Data Structure', pages: 325, author: 'Reema Thareja'},
    {position: 6, name: 'Angular', pages: 480, author: 'Greg Lim'},
    {position: 7, name: 'NodeJs', pages: 356, author: 'Ethan Brown'},
  ];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
    cities =  [
        {city_name: 'Pune'},
        {city_name: 'Mumbai'},
        {city_name: 'Nasik'},
        {city_name: 'Nagar'},
        {city_name: 'Aurangabad'}
    ];

    displayedColumns: string[] = ['position', 'name', 'pages', 'author'];
    dataSource = ELEMENT_DATA;
}
