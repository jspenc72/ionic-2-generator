import {Resource, ResourceParams} from "ng2-resource-rest";
import {Injectable} from "@angular/core";

@Injectable()
@ResourceParams({
    url: 'http://localhost:9000/api/',		// Url to api
    path: '/<%= lowercase %>s/{id}'			// Api path
})

export class <%= name %> extends Resource {}

/**
Documentation for using ng2-resource-rest resources may be found here:
https://github.com/troyanskiy/ng2-resource-rest
*/

