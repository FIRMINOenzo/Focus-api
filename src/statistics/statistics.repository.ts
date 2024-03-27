import { PrismaService } from 'src/shared/db/prisma.service';

export class StatisticsRepository {
  constructor(private readonly prisma: PrismaService) {}
}
