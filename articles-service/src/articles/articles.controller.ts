import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('')
@ApiTags('articles')
@ApiBearerAuth()
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  @ApiOperation({ summary: 'create article' })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @ApiOperation({ summary: 'find drafts articles' })
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @ApiOperation({ summary: 'find feed articles' })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('/users/:userId')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  @ApiOperation({ summary: 'find user articles' })
  @UseGuards(AuthGuard)
  findUserArticles(@Param('id') id: string) {
    console.log(id);
    console.log(id);
    return 'hey';
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  @ApiOperation({ summary: 'find article by id' })
  async findOne(@Param('id') id: string) {
    const article = await this.articlesService.findOne(id);
    if (article) return article;
    throw new NotFoundException(`Article with ${id} does not exist.`);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  @ApiOperation({ summary: 'update article by id' })
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: ArticleEntity })
  @ApiOperation({ summary: 'remove article by id' })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
