import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';
import { CreateRoleDto, GetRoleDto, UpdateRoleDto } from './role.dto';

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
    return await this.roleRepository.findOne(getRoleDto.id);
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const user = await this.roleRepository.create(createRoleDto);
    await this.roleRepository.save(user);

    return user;
  }

  async deleteById(getRoleDto: GetRoleDto): Promise<any> {
    const role = await this.findById(getRoleDto);

    return this.roleRepository.remove(role);
  }

  async update(updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.findById(updateRoleDto);

    role.caption = updateRoleDto.caption;
    role.description = updateRoleDto.description;

    return await this.roleRepository.save(role);
  }
}
