import { Test, TestingModule } from '@nestjs/testing';

import { ApiResetPasswordService } from 'src/api/service/api-reset-password.service';
import { ApiSignInService } from 'src/api/service/api-sign-in.service';
import { ApiSignUpService } from 'src/api/service/api-sign-up.service';
import { AuthController } from './auth.controller';
import { ResetPasswordService } from 'src/domain/use-case/auth/reset-password/reset-password.service';
import { SignInService } from 'src/domain/use-case/sign-in/sign-in.service';
import { SignUpService } from 'src/domain/use-case/sign-up/sign-up.service';

describe('AuthController', () => {
  let controller: AuthController;

  let apiSignUpService: ApiSignUpService;
  let apiSignInService: ApiSignInService;
  let apiResetPasswordService: ApiResetPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [ApiSignUpService, ApiSignInService, ApiResetPasswordService]
    }).compile();

    apiSignUpService = module.get<ApiSignUpService>(ApiSignUpService);
    apiSignInService = module.get<ApiSignInService>(ApiSignInService);
    apiResetPasswordService = module.get<ApiResetPasswordService>(ApiResetPasswordService);

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Call sign in endpoint', () => {
    it('should call sign in service when call sign in endpoint', async () => {
      // jest.spyOn()
    })
  })
});
