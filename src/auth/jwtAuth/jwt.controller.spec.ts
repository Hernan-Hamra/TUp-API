import { Test, TestingModule } from '@nestjs/testing';
import { AuthJwtController } from './jwt.controller';
import { AuthJwtService } from './jwt.service';

describe('AuthJwtController', () => {
  let controller: AuthJwtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthJwtController],
      providers: [AuthJwtService],
    }).compile();

    controller = module.get<AuthJwtController>(AuthJwtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
