import { Module } from "@nestjs/common";

import { QuoteModule } from "../modules/quote";

@Module({
  imports: [QuoteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
