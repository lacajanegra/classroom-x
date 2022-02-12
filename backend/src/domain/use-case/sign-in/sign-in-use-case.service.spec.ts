import { Test, TestingModule } from '@nestjs/testing';
import { SignInUseCaseService } from './sign-in-use-case.service';

describe('SignInUseCaseService', () => {
  let service: SignInUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignInUseCaseService],
    }).compile();

    service = module.get<SignInUseCaseService>(SignInUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
