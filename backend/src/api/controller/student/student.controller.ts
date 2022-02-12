import { Controller, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Controller('student')
@UseGuards(AuthGuard())
export class StudentController {}
