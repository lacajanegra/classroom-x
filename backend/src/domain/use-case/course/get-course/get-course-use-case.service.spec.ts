import { Test, TestingModule } from '@nestjs/testing';
import { GetCourseUseCaseService } from './get-course-use-case.service';

describe('GetCourseUseCaseService', () => {
  let service: GetCourseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCourseUseCaseService],
    }).compile();

    service = module.get<GetCourseUseCaseService>(GetCourseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
