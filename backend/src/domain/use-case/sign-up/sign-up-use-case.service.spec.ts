import { Test, TestingModule } from '@nestjs/testing';
import { SignUpUseCaseService } from './sign-up-use-case.service';

describe('SignUpUseCaseService', () => {
  let service: SignUpUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignUpUseCaseService],
    }).compile();

    service = module.get<SignUpUseCaseService>(SignUpUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
