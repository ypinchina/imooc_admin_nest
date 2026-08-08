import { Injectable } from '@nestjs/common';
@Injectable()
export class TestService {
    getAllData(body, query): string {
        console.log(body, query)
        return 'test_all_data:' + JSON.stringify(body) + ', query:' + JSON.stringify(query)
    }
}
