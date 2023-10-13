import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoDbConfig = async (
  configServise: ConfigService
): Promise<TypegooseModuleOptions> => ({
  uri: configServise.get('MONGO_URI'),
})
