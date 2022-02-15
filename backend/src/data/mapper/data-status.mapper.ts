import { DateUtilService } from '../util/date-util.service';
import { Injectable } from "@nestjs/common";
import { StatusEnum } from 'src/domain/model/status.enum';

@Injectable()
export class DataStatusMapper {

    constructor(private readonly dateUtilService: DateUtilService) { }

    fromEntityToModel(expiration: Date): StatusEnum {

        if (!expiration) {
            return StatusEnum.EXPIRED
        }

        return this.dateUtilService.isExpiratied(expiration) ? StatusEnum.EXPIRED : StatusEnum.ACTIVE
    }

}