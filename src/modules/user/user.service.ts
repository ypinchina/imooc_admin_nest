import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { User } from './user.entity'
import { UserData } from './user.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {

    }
    getUser(param): Promise<User | null> {
        return this.userRepository.findOneBy({ id: param.id });
    }
    getAll(): Promise<User[] | null> {
        return this.userRepository.find();
    }
    addUser(body: UserData): Promise<User> {
        const user = this.userRepository.create(body);
        //2.save写入数据库，save返回Promise<User>
        return this.userRepository.save(user);
    }
    deleteUser(id: string): Promise<DeleteResult> {
        return this.userRepository.delete(id)
    }
}
