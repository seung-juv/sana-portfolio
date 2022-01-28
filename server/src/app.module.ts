import { WorksController } from '#models/works/works.controller';
import { WorksModule } from '#models/works/works.module';
import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppConfigModule } from '#config/app/config.module';
import { PostgreDatabaseProviderModule } from '#providers/database/postgres/provider.module';
import { FilesController } from '#models/files/files.controller';
import { FilesModule } from '#models/files/files.module';
import { AuthModule } from '#authentication/auth.module';
import { AuthController } from '#authentication/auth.controller';
import { UserTypesModule } from '#models/user-types/user-types.module';
import { UserTypesController } from '#models/user-types/user-types.controller';
import { UsersModule } from '#models/users/users.module';
import { UsersController } from '#models/users/users.controller';
import { UserTypesGuard } from '#common/guards/user-types.guard';
import { JwtAuthGuard } from '#common/guards/jwt-auth.guard';
import { ConfigsModule } from '#models/configs/configs.module';
import { ConfigsController } from '#models/configs/configs.controller';

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [
    AppConfigModule,
    PostgreDatabaseProviderModule,
    FilesModule,
    AuthModule,
    UserTypesModule,
    UsersModule,
    WorksModule,
    ConfigsModule,
  ],
  controllers: [
    AppController,
    FilesController,
    AuthController,
    UserTypesController,
    UsersController,
    WorksController,
    ConfigsController,
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: UserTypesGuard,
    },
  ],
})
export class AppModule {}
