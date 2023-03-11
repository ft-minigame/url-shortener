import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCondition, FindConditions } from 'typeorm';
import { CreateLinkDto } from './dto/create-link.dto';
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
    return this.linksRepository.findOne(conditions);
  }

  async deleteLink(id: string): Promise<void> {
    await this.linksRepository.delete({ id });
  }
}
