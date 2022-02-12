import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCourseUseCaseService } from './update-course-use-case.service';

describe('UpdateCourseUseCaseService', () => {
  let service: UpdateCourseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateCourseUseCaseService],
    }).compile();

    service = module.get<UpdateCourseUseCaseService>(UpdateCourseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
