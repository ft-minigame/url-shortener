import { Controller, Get } from '@nestjs/common';

@Controller() //argument string links
export class AppController {
  @Get('/:name')
  async getLinkByName() {
    return 'helloworld';
  }
}
