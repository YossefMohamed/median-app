import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, JwtService],
  imports: [PrismaModule],
})
export class ArticlesModule {}
