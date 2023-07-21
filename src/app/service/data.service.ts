import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Simulando a injeção de dependencia de uma API
  private dataList: any =
    {
      user: 'Leonardo Santos',
      statusUser: 'Nivel Roxo',
      myBody: 'Meu Corpo',
      goals: 'OBJETIVOS E CONQUISTAS',
      personalOn: 'PERSONAL ONLINE',
      yoga: 'YOGA EXPERIENCE',
      programas: 'PROGRAMAS',
      keepTraining: 'continuar treinando',
      levatamento: 'LEVATAMENTO DE PESO',
      contents: 'CONTEUDOS'
    };

  constructor() { }

  public listData(){
    return this.dataList;
  }
}
