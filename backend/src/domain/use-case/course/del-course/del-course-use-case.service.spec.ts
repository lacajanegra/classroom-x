import { Test, TestingModule } from '@nestjs/testing';
import { DelCourseUseCaseService } from './del-course-use-case.service';

describe('DelCourseUseCaseService', () => {
  let service: DelCourseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DelCourseUseCaseService],
    }).compile();

    service = module.get<DelCourseUseCaseService>(DelCourseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
