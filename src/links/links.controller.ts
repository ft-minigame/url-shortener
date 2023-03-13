import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './link.entity';
import { LinksService } from './links.service';

@Controller('links') //argument string links
export class LinksController {
  constructor(private readonly linksService: LinksService) {}
  @Get()
  async getAllLinks(): Promise<Array<Link>> {
    return this.linksService.getAllLinks();
  }
  @Post()
  async createLink(@Body() createLinkDto: CreateLinkDto): Promise<Link> {
    return this.linksService.createLink(createLinkDto);
  }

  @Delete('/:id')
  async deleteLink(@Param() getLinkDto: GetLinkDto): Promise<void> {
    return this.linksService.deleteLink(getLinkDto);
  }

  @Put('/:id')
  async updateLink(
    @Param() getLinkDto: GetLinkDto,
    @Body() updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    return this.linksService.updateLink(getLinkDto, updateLinkDto);
  }
}
