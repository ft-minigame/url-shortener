import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCondition, FindConditions } from 'typeorm';
import { CreateLinkDto } from './dto/create-link.dto';
import { GetLinkDto } from './dto/get-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { Link } from './link.entity';
import { LinksRepository } from './links.repository';

@Injectable()
export class LinksService {
  //linksRepository: LinksRepository;
  //constructor(
  //  @InjectRepository(LinksRepository) linksRepository: LinksRepository,
  //) {
  //  this.linksRepository = linksRepository;
  //} -> 이걸 아래로 줄여쓸 수 있다? 라고 말하고 휙넘어가서 정확하게 이해못함,,
  constructor(
    @InjectRepository(LinksRepository)
    private readonly linksRepository: LinksRepository,
  ) {}
  async getAllLinks(): Promise<Array<Link>> {
    return this.linksRepository.find({});
  }
  async createLink(createLinkDto: CreateLinkDto) {
    return this.linksRepository.createLink(createLinkDto);
  }

  async getLink(conditions: FindConditions<Link>): Promise<Link> {
    const link = await this.linksRepository.findOne(conditions);

    if (!link) {
      throw new NotFoundException(); //58분에서 난 이거 안됨,, not found error 404 안뜨고 계속 인터넷 에러로 뜸,,
    }

    return link;
  }

  async deleteLink(getLinkDto: GetLinkDto): Promise<void> {
    const { id } = getLinkDto;
    const res = await this.linksRepository.delete({ id });
    if (res.affected === 0) {
      throw new NotFoundException(`Link with ID: "${id}" not found`);
    }
  }

  async updateLink(
    getLinkDto: GetLinkDto,
    updateLinkDto: UpdateLinkDto,
  ): Promise<Link> {
    const { id } = getLinkDto;
    const { name, url } = updateLinkDto;
    const link = await this.getLink({ id });
    link.name = name;
    link.url = url;
    await this.linksRepository.save(link);
    return link;
  }
}
