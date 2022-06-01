import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems = [
    {name: 'DISNEY+', path:'/DISNEY', subItems: [
      {name:'Saiba mais',path:'/'},
      {name:'Combo+',path:'/'},
      {name:'Disponivel no Disney+',path:'/'},
      {name:'Sobre o Disney+',path:'/'},
      {name:'Disney+ News',path:'/'},
      {name:'Central de Ajuda',path:'/'},
      ] 
    },
    {name: 'SHOP', path:'/SHOP' },
    {name: 'NOVIDADES', path:'/NOVIDADES' },
    {name: 'FILMES', path:'/FILMES', subItems: [
      {name:'Lightyear',path:'/'},
      {name:'Eternos',path:'/'},
      {name:'Shang-Chi e a Lenda dos Dez Anéis',path:'/'},
      {name:'Viúva Negra',path:'/'},
      {name:'Jungle Cruise',path:'/'},
      {name:'Cruella',path:'/'},
      {name:'20th Century Studios',path:'/'},
     ] },
    {name: 'DISNEY TICKETS', path:'/DISNEY-TICKETS' },
    {name: 'MARVEL INSIDER', path:'/MARVEL-INSIDER' },
    {name: 'TV', path:'/TV', subItems: [
      {name:'Disney Channel',path:'/'},
    ] },
    {name: 'MAIS', path:'/MAIS', subItems: [
      {name:'Radio Disney',path:'/'},
      {name:'Mais',path:'/'},
    ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
