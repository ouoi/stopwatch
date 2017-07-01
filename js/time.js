/**
 * time library
 *
 * @author      ldw
 * @email       ouoiouoi@gmail.com
 * @version     1.0.0 2017.06.26
 */
'use strict';

var TIME = {
    MAX_MILLISECOND: 100,   // 1/100초라 millisecond는 아니지만 임의 지정함
    MAX_MINUTE: 60 * 60,
    MAX_HOUR: 24 * 60 * 60,
    MAX_TIME: 24 * 60 * 60 * 100,

    // 숫자를 두자리 문자열로 변환 (ex: 3 -> 03)
    getTwoDigit: function (num) {
        return (num < 10 ? '0' : '') + num;
    },

    // 시간 출력 형태로 변환 (ex: 123456 -> 00:20:34.56)
    displayTime: function (time) {
        if (time == null || typeof time !== 'number') {
            return;
        }

        if (time > this.MAX_TIME) {
            time -= this.MAX_TIME;
        }

        var ms = time % this.MAX_MILLISECOND;
        time /= this.MAX_MILLISECOND;
        var hour = parseInt(time / this.MAX_MINUTE),
            minute = parseInt(time % this.MAX_MINUTE / 60),
            second = parseInt(time % 60);
        
        return this.getTwoDigit(hour) + ':' + this.getTwoDigit(minute) + ':' + this.getTwoDigit(second) + '.' + this.getTwoDigit(ms);
    }
};