import { Test, TestingModule } from '@nestjs/testing';
import { SignOutUseCaseService } from './sign-out-use-case.service';

describe('SignOutUseCaseService', () => {
  let service: SignOutUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignOutUseCaseService],
    }).compile();

    service = module.get<SignOutUseCaseService>(SignOutUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
