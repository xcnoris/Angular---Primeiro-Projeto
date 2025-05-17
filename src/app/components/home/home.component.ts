import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  NomeUser = "Augusto";
  
  private enviarFomrularioService = inject(EnviaFormularioService);
  submit(){
    this.enviarFomrularioService.submit()
    this.emitindoValorName.emit(this.NomeUser);
  }


  @Input() minhaPropDeFora!: string;

  @Output() emitindoValorName = new EventEmitter<string>();
}
