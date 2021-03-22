import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../servicios/contacto.service';


@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.scss']
})
export class FormularioContactoComponent implements OnInit {
  FormData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactoService
    ) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    })
  }

  onSubmit(FormData){
    console.log(FormData);
    this.contact.postMessage(FormData).subscribe(
      response => {
        //location.href = 'http://mailthis.to/confirm';
        console.log(response);
      },
      error =>  {
        console.warn(error.responseText);
        console.log( { error });
      }
    )
  }

}
