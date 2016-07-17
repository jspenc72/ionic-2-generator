import {Resource, ResourceParams} from "ng2-resource-rest";
import {Injectable} from "@angular/core";


@Injectable()
@ResourceParams({
    url: 'http://localhost:9000/api/',		// Url to api
    path: '/<%= lowercase %>/{id}'			// Api path
})

export class <%= name %> extends Resource {}