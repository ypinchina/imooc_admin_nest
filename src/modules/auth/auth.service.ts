import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }
    login(username: string, password: string) {
        this.userService.loginByUserName(username)
    }
}
