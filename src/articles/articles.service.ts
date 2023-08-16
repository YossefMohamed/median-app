import { Injectable } from '@nestjs/common';

import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  // CRUD operations
  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({ data: createArticleDto });
  }
  findAll() {
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }
}