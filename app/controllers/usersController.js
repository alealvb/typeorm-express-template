import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class UsersController {
  
  userRepository = getRepository(User);

  async index(request, response, next) {
    return this.userRepository.find()
  }

  async show(request, response, next) {
    return this.userRepository.findOne(request.params.id)
  }

  async create(request, response, next) {
    return this.userRepository.save(request.body)
  }

  async update(request, response, next) {
    let user = await this.userRepository.findOneOrFail({id: request.params.id})
    user = {...user, ...request.body}
    return this.userRepository.save(user)
  }

  async destroy(request, response, next) {
    const user = await this.userRepository.findOne(request.body);
    return this.userRepository.remove(user);
  }
}
