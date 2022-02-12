import { Test, TestingModule } from '@nestjs/testing';
import { BCryptPasswordService } from './bcrypt-password.service';

describe('BCryptPasswordService', () => {
  let service: BCryptPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BCryptPasswordService],
    }).compile();

    service = module.get<BCryptPasswordService>(BCryptPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
