import { Test, TestingModule } from '@nestjs/testing';
import { JwtService, MyJwtService } from './jwt.service';

describe('MyJwtService', () => {
  let service: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyJwtService],
    }).compile();

    service = module.get<MyJwtService>(MyJwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
