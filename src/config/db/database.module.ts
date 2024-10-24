import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfigModule } from '../env/envconfig.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvConfigModule],
      useFactory: async () => ({
        uri: process.env.DATABASE_URL,
      }),
    }),
  ],
})
export class DatabaseModule {}