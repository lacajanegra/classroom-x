import { SetMetadata } from "@nestjs/common";
import { StatusEnum } from "src/domain/model/status.enum";

export const STATUS_KEY = 'status'
export const Status = (...status: StatusEnum[]) => SetMetadata(STATUS_KEY, status)