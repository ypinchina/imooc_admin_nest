import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class TestService {
    getAllData(body, query): string {
        console.log(body, query)
        return 'test_all_data:' + JSON.stringify(body) + ', query:' + JSON.stringify(query)
    }
    getListDetail(param): string {
        if (!param.id || param.id !== '4') {
            throw new HttpException('id不对', HttpStatus.BAD_REQUEST);
        }
        return 'test:' + param.id
    }
}
