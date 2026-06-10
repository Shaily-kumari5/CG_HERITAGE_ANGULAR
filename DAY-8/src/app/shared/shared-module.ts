import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from './components/button/button';
import { Badge } from './components/badge/badge';
import { Spinner } from './components/spinner/spinner';

import { Highlight } from './directives/highlight';
import { Truncate } from './directives/truncate';

import { TruncatePipe } from './pipes/truncate-pipe';
import { RupeePipe } from './pipes/rupee-pipe';

@NgModule({
  declarations: [
    Button,
    Badge,
    Spinner,
    Highlight,
    Truncate,
    TruncatePipe,
    RupeePipe
  ],

  imports: [
    CommonModule
  ],

  exports: [
    CommonModule,

    Button,
    Badge,
    Spinner,

    Highlight,
    Truncate,

    TruncatePipe,
    RupeePipe
  ]
})
export class SharedModule {}