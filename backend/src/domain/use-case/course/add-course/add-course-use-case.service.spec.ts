import { Test, TestingModule } from '@nestjs/testing';
import { AddCourseUseCaseService } from './add-course-use-case.service';

describe('AddCourseUseCaseService', () => {
  let service: AddCourseUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCourseUseCaseService],
    }).compile();

    service = module.get<AddCourseUseCaseService>(AddCourseUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
