import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class QuoteLotCreateDto {
  @ApiProperty({
    description: "ParentQuoteLotId",
  })
  @IsUUID()
  parentQuoteLotId: string;
}
