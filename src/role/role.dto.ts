import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class GetRoleDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
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

export class UpdateRoleDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly caption: string;
  @ApiModelProperty()
  @IsNotEmpty()
  readonly description: string;
}
