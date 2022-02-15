import { DataModule } from 'src/data/data.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DataModule],
  providers: [],
  exports: []
})
export class StudentModule {}
