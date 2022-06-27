import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Convidado } from './convidado/convidado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    convidadoList : Convidado[] = []
    newConvidado: Convidado = {} as Convidado

    constructor (){ }
    
    ngOnInit(){ }

    saveData(form: NgForm){
      this.convidadoList.push(this.newConvidado)
      this.newConvidado = {}  as Convidado
      form.resetForm();
    }
}
