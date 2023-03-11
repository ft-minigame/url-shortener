import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { LinksService } from 'src/links/links.service';

@Controller()
export class WildcardController {
  constructor(private readonly linksService: LinksService) {}

  @Get('/:name')
  async getLinkByName(
    @Param('name') name: string,
    @Res() res: Response,
  ): Promise<void> {
    const link = await this.linksService.getLink({ name });
    return res.redirect(301, link.url);
  }
}
