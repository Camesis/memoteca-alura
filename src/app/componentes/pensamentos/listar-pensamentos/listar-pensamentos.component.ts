import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus lacinia dui quis imperdiet. Donec eu massa lorem. Ut molestie, tellus id blandit ultricies, tortor odio consequat metus, sit amet placerat elit magna a quam. Nam eget venenatis est. Quisque eget justo fermentum, fringilla felis at, malesuada urna. Mauris quis sem magna. Vestibulum at eros quis diam pharetra egestas sit amet et sapien. Curabitur vitae interdum orci. Praesent vel vulputate dui. Phasellus luctus tortor dolor, sed blandit nulla finibus at. Vivamus pellentesque a neque ac dictum. Donec lacinia lectus a quam feugiat euismod. Pellentesque eleifend blandit aliquam. Pellentesque id ipsum id massa pretium luctus nec feugiat orci. Donec risus risus, mollis quis nisi vitae, vestibulum lobortis massa',
      autoria: 'Camesis',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Passo informações por um preço amigável',
      autoria: 'Camesis',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Pipipipopopo existe sim!',
      autoria: 'Camesis',
      modelo: 'modelo2'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
