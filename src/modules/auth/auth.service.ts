import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import md5 from 'md5'
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }
    async login(username: string, password: string) {
        const user = await this.userService.loginByUserName(username)
        const md5Password = md5(password).toUpperCase()
        if (user?.password !== md5Password) {
            throw new UnauthorizedException();
        } else {
            const payload = { username: user?.username };
            return {
                // 💡 Here the JWT secret key that's used for signing the payload 
                // is the key that was passed in the JwtModule
                access_token: await this.jwtService.signAsync(payload),
            };
        }
    }
}
