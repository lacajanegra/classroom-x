import { Test, TestingModule } from '@nestjs/testing';
import { Argon2PasswordService } from './argon2-password.service';

describe('Argon2Service', () => {
  let service: Argon2PasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Argon2PasswordService],
    }).compile();

    service = module.get<Argon2PasswordService>(Argon2PasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
