import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class SearchDto {
  @ApiProperty({
    description: "The search term",
    example: "Paris",
  })
  @IsString()
  searchTerm: string;
}
