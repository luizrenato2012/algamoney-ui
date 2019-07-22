import { ShareModule } from './../share/share.module';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SelectButtonModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CurrencyMaskModule,
    DataTableModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  declarations: [
    LancamentosCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports : [
    LancamentosCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
