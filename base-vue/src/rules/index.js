import { DateTime } from 'luxon'


const isDateFormat = (format = 'yyyy-MM-dd hh:mm') =>
    (value) => {
        if (value === undefined || value === null || value.length === 0) {
            return true;
        }
        return DateTime.fromFormat(value, format).isValid;
    }

export {
    isDateFormat
}
