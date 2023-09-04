import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CredentialController } from './credential.controller';
import { CredentialRepository } from './credential.repository';
import { CredentialUtils } from 'src/utils/credential.utils';

@Module({
  controllers: [CredentialController],
  providers: [CredentialService, CredentialRepository, CredentialUtils],
})
export class CredentialModule {}
