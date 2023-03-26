import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '@src/utils';
import { TypeOrmModule } from '@nestjs/typeorm';
const { MYSQL_CONFIG } = getConfig();

@Module({
  imports: [
    // mysql配置
    // TypeOrmModule.forRoot(MYSQL_CONFIG),
    // 自定义环境配置
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig], // 导入路径
    }),
    // 用户模块
    UserModule,
  ],
})
export class AppModule {}
