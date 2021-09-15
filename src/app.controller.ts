import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidatorDto } from './dto';

@Controller('/smile')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  validation(@Body() {id_number, id_type, user_id}: ValidatorDto) {
    return this.appService.smileValidator(user_id, id_type, id_number);
  }
}
