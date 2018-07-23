/* Plaats hier modules/componenten en services die in de hele app beschikbaar moeten zijn*/

import {NgModule} from '@angular/core';

import {EntriesPipe} from './pipes/entry-pipe';
import {KeysPipe} from './pipes/keys-pipe';

export const COMPONENTS = [
  KeysPipe,
  EntriesPipe
];

export const MODULES = [];

export const COMPONENT_PLUS_MODULES = [...COMPONENTS, MODULES];


@NgModule({
  imports: [MODULES,
  ],
  declarations: COMPONENTS,
  providers: [],
  exports: COMPONENT_PLUS_MODULES,
})
export class SharedUtilsModule {
}
