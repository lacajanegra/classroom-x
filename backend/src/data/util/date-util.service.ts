import * as moment from 'moment';

import { Injectable } from "@nestjs/common";

@Injectable()
export class DateUtilService {

    getExpiration(): Date {
        const expiration = new Date();
        expiration.setMonth(expiration.getMonth() + 1);
        return expiration
    }

    isExpiratied(expiration: Date): boolean {
        const now = moment(new Date()).format("YYYY-MM-DD")
        const value = moment(expiration).format("YYYY-MM-DD")
        return now >= value
    }

}
