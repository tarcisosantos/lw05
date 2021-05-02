import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    findByEmail(email: any) {
        throw new Error("Method not implemented.");
    }
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string){
        // Verificar se Usuario Existe
        const userExists = await this.usersRepository.findOne({
            email
        })    
        // se  existir, salvar no Bd
        if(userExists){
            return userExists
        }
        // Se nao existir, retornar user
        const user = this.usersRepository.create({
            email
        });
        await this.usersRepository.save(user);
        return user;
    }
}

export { UsersService }