import { Injectable } from '@angular/core';
import { ModelManager } from '@adobe/cq-spa-page-model-manager';

export interface DataConfig {
    path ?: string;
    immutable ?: boolean;
    forceReload ?: boolean;
}

@Injectable()
export class ModelManagerService {
    constructor() {

    }
    getData(cfg: DataConfig) {
        return ModelManager.getData(cfg);
    }
}