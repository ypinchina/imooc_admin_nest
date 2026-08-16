import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(param): string {
        return 'test:' + param.id
    }
}
