import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetRoleDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumberString()
  readonly id: number;
}

export class CreateRoleDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly caption: string;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly description: string;
}

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

    return { success: true, data: role};
  }

  @Post(':id')
  @ApiOperation({ title: 'Create the role.' })
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<any> {
    return { success: true, data: await this.roleRepository.create(createRoleDto)};
  }
}
