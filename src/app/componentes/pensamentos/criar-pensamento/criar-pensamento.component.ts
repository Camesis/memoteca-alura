import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
 pensamento = {
  id: '1',
  conteudo: 'Aprendendo Angular Estou!',
  autoria:'Dev',
  modelo: 'modelo2'
 }

 criarPensamento() {
  alert("Novo pensamento criado!")
 }

 cancelar() {
  alert("Novo pensamento cancelado!")
 }
  constructor() { }

  ngOnInit(): void {
  }

}