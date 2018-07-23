import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractRestImplService} from '../../abstract-rest.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class MasterDataService extends AbstractRestImplService {

  // Override the default settings with FeedBack specific settings.
  // with JSON at the end of the string post, puts, deletes and getSingle will not go well but all we need error
  // And if we ever decide that we should add it to a DB the services does not need to change at all only the apiName Need to Be updated.
  // Infact if we could make it easily switchable between a single JSON file and a Real back-end server this would be the ultimate solution.
  url: string = environment.masterDataStore.url;
  apiName: string = environment.masterDataStore.apiNameMasterData;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.info('MasterDataService:>>Initialized:url:>' + this.url + '/' + this.apiName);
  }

  // TODO IDSME get the JSON key value masterdetail data from the server.
}
