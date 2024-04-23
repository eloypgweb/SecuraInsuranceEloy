import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatoFechaPipe } from './formato-fecha.pipe';
import { FormatoTelefonoPipe } from './formato-telefono-pipe.pipe';
import { FormatoDineroPipe } from './formato-dinero.pipe';

@NgModule({
  declarations: [FormatoFechaPipe, FormatoTelefonoPipe, FormatoDineroPipe],
  exports: [FormatoFechaPipe, FormatoTelefonoPipe, FormatoDineroPipe],
  imports: [CommonModule],
})
export class MispipesModule {}
