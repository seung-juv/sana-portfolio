import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkDto {
  @ApiProperty({
    type: Boolean,
    default: false,
  })
  isActive: boolean;
}
