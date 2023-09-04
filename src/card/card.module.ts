import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardRepository } from './card.repository';
import { CardUtils } from '../utils/card.utils';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRepository, CardUtils],
})
export class CardModule {}
