import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ title: 'Default hello world method' })
  @ApiResponse({ status: 200, description: 'Successful executed' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
