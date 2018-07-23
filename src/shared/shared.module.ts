/* Plaats hier modules/componenten en services die in de hele app beschikbaar moeten zijn*/

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ContentComponent} from './layout/content.component';
import {ApplicationVersionComponent} from './duplo/application-version.component';
import {ReleasenotesComponent} from './layout/releasenotes/releasenotes.component';
import {StyleguideComponent} from './layout/styleguide/styleguide.component';
import {FooterComponent} from './layout/footer.component';
import {HeaderComponent} from './layout/header.component';
import {InputComponent} from './layout/forms/input/input.component';
import {AchternaamComponent} from './layout/forms/achternaam/achternaam.component';
import {GeboortedatumComponent} from './layout/forms/geboortedatum/geboortedatum.component';
import {TussenvoegselComponent} from './layout/forms/tussenvoegsel/tussenvoegsel.component';
import {VoorlettersComponent} from './layout/forms/voorletters/voorletters.component';
import {AanhefComponent} from './layout/forms/aanhef/aanhef.component';
import {FormExampleComponent} from './layout/forms/formexample/formexample.component';
import {FormdebugComponent} from './layout/forms/formdebug/formdebug.component';
import {FormExampleFlexComponent} from './layout/forms/formexampleflex/formexampleflex.component';
import {AngularFlexLayoutComponent} from './layout/forms/angularflexlayout/angularflexlayout.component';
import {FeedbackComponent} from './duplo/feedback/feedback.component';
// Feedback component contains great example code removed angular-star-rating from the package.json import {StarRatingModule} from 'angular-star-rating';
import {ConfigComponent} from './duplo/config/config.component';
import {HeaderImageComponent} from './layout/header-image/header-image.component';
import {FileNotFoundComponent} from './duplo/file-not-found/file-not-found.component';
import {SharedRoutingModule} from './shared-routing.module';

import {RouterLinkTesterComponent} from './duplo/router-link-tester/router-link-tester.component';
import {ConfigService} from './duplo/config/config.service';
import {MasterDataService} from './duplo/masterdata/masterdata.service';

import {EntriesPipe} from './pipes/entry-pipe';
import {KeysPipe} from './pipes/keys-pipe';
import {ButtonComponent} from './ui/button.component';
import {FeedBackService} from './duplo/feedback/feedback.service';
import {HttpClientModule} from '@angular/common/http';


export const COMPONENTS = [
  HeaderComponent,
  HeaderImageComponent,

  ContentComponent,
  FooterComponent,
  ApplicationVersionComponent,
  AchternaamComponent,
  GeboortedatumComponent,
  TussenvoegselComponent,
  VoorlettersComponent,
  AanhefComponent,
  FormExampleComponent,
  FormExampleFlexComponent,

  ButtonComponent,
  RouterLinkTesterComponent,
  FormdebugComponent,
  AngularFlexLayoutComponent,
  FeedbackComponent,
  ConfigComponent,
  ReleasenotesComponent,
  FileNotFoundComponent,

  InputComponent,
  StyleguideComponent
];

export const MODULES = [
  CommonModule,
  HttpClientModule,
//  If we add this Error pop's up in the console. ReactiveFormsModule
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

export const COMPONENT_PLUS_MODULES = [...COMPONENTS, MODULES];


@NgModule({
  imports: [MODULES, SharedRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [ConfigService, MasterDataService, FeedBackService],
  exports: COMPONENT_PLUS_MODULES,
})
export class SharedModule {
}
