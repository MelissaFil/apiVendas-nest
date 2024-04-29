import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { AddressModule } from './address/address.module';
import { CityModule } from './city/city.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password:process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      type: 'postgres',
      entities:[`${__dirname}/**/*.entity{.js,.ts}`],
      migrations:[`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    AddressModule,
    CityModule,
    AuthModule],
  controllers: [],
})
export class AppModule {}

