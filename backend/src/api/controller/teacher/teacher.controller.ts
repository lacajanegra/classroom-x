import { Controller, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Controller('teacher')
@UseGuards(AuthGuard())
export class TeacherController {}
