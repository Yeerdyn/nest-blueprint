import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto, GetRoleDto } from './role.controller';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findById(getRoleDto: GetRoleDto): Promise<Role> {
    return await this.roleRepository.findOne(getRoleDto);
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const user = await this.roleRepository.create(createRoleDto);
    await this.roleRepository.save(user);

    return user;
  }
}
