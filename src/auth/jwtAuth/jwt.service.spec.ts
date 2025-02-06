import { Test, TestingModule } from '@nestjs/testing';
import { JwtServiceAuth } from './jwt.service';

describe('JwtServiceAuth', () => {
  let service: JwtServiceAuth;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtServiceAuth],
    }).compile();

    service = module.get<JwtServiceAuth>(JwtServiceAuth);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
