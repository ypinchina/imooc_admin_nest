import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    // @Get(':id')
    // getUserById(@Param() param) {
    //     return this.userService.getUser(param)
    // }
    // @Get()
    // getAll() {
    //     return this.userService.getAll()
    // }
    // @Post()
    // createUser(@Body() body) {
    //     return this.userService.addUser(body)
    // }
    // @Delete(':id')
    // deleteUser(@Param('id', ParseIntPipe) id: string) {
    //     return this.userService.deleteUser(id)
    // }
    @Get('info')
    getUserInfo(@Req() req) {
        return this.userService.getUser(req.user)
    }
}
