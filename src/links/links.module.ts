import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksRepository } from './links.repository';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LinksRepository])], //20분까지 한건데 이러면 get link할 준비 다된거임
  providers: [LinksService],
  controllers: [LinksController],
  exports: [LinksService],
})
export class LinksModule {}
