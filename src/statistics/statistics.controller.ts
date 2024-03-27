import { Controller, Get, Param, Req } from '@nestjs/common';
import { Public } from 'src/auth/guards/decorators/public.decorator';

@Controller('statistics')
export class StatisticsController {
  // Trocar tipo por StatisticsService...
  // constructor(private readonly statisticsService: any) {}

  @Public()
  @Get(':id')
  async getUserStatistics(@Param('id') id: string) {}
}
