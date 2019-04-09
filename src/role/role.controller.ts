import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { CreateRoleDto, GetRoleDto, UpdateRoleDto } from './role.dto';

@ApiUseTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleRepository: RoleService) {}

  @Get('list')
  @ApiOperation({ title: 'Get a list of all available roles.' })
  async getAllRoles(): Promise<any> {
    return { success: true, data: await this.roleRepository.findAll() };
  }

  @Get()
  @ApiOperation({ title: 'Get the role by id.' })
  async getRolesById(@Query() getRoleDto: GetRoleDto): Promise<any> {
    const role = await this.roleRepository.findById(getRoleDto);

    if (!role) {
      throw new HttpException('Entity not found', HttpStatus.NOT_FOUND);
    }

    return { success: true, data: role };
  }

  @Post()
  @ApiOperation({ title: 'Create the role.' })
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<any> {
    return {
      success: true,
      data: await this.roleRepository.create(createRoleDto),
    };
  }

  @Put()
  @ApiOperation({ title: 'Update the role.' })
  async updateRole(@Body() updateRoleDto: UpdateRoleDto): Promise<any> {
    return {
      success: true,
      data: await this.roleRepository.update(updateRoleDto),
    };
  }

  @Delete()
  @ApiOperation({ title: 'Delete the role.' })
  async deleteRole(@Body() getRoleDto: GetRoleDto): Promise<any> {
    return {
      success: true,
      data: await this.roleRepository.deleteById(getRoleDto),
    };
  }
}
