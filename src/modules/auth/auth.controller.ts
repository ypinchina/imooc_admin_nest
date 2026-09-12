import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Public()
    @Post('/login')
    @UseFilters(HttpExceptionFilter)
    login(@Body() params) {
        return this.authService.login(params.username, params.password).then(res => {
            return {
                status: 0,
                mesg: '登录成功'
            }
        }).catch(err => {
            return err
        })
    }

}
