import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import md5 from 'md5'
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }
    async login(username: string, password: string) {
        const user = await this.userService.loginByUserName(username)
        const md5Password = md5(password).toUpperCase()
        if (user?.password !== md5Password) {
            throw new UnauthorizedException();
        }
    }
}
