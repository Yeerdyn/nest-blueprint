import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userRepository: UserService) {}

  @Get('list')
  @ApiOperation({ title: 'Get a list of all available users.' })
  async getAllUsers(): Promise<any> {
    return { success: true, data: await this.userRepository.findAll() };
  }
}
