import { Test, TestingModule } from '@nestjs/testing';
import { GetCoursesUseCaseService } from './get-courses-use-case.service';

describe('GetCoursesUseCaseService', () => {
  let service: GetCoursesUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCoursesUseCaseService],
    }).compile();

    service = module.get<GetCoursesUseCaseService>(GetCoursesUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
