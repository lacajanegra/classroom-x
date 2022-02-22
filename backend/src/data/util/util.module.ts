import { DateUtilService } from "./date-util.service";
import { Module } from "@nestjs/common";

@Module({
    providers: [DateUtilService],
    exports: [DateUtilService]
})
export class UtilModule { }
