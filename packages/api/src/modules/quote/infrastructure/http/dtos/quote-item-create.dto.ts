import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsUUID } from "class-validator";

export class QuoteItemCreateDto {
  @ApiProperty({
    description: "ParentQuoteLotId",
  })
  @IsUUID()
  parentQuoteLotId: string;

  @ApiProperty({
    description: "Amount",
  })
  @IsNumber()
  amount: number;
}
