/**
 * count down module
 *
 * @author      ldw
 * @email       ouoiouoi@gmail.com
 * @version     1.0.0 2017.06.26
 */
'use strict';

var COUNTDOWN = {
    _ms: 0,             // 1/100 초
    _input: 0,          // 입력값(초)
    _isStart: false,    // 진행중 여부
    _isPause: false,    // 일시 정지 여부
    _elemTime: document.querySelector('.time'),

    // 시간 출력
    _display: function () {
        this._elemTime.innerHTML = TIME.displayTime(this._ms);
    },

    // 10ms씩 시간 증가
    _progress: function () {
        var me = this;
        setTimeout(function () {
            if (me._isStart) {
                if (me._ms <= 0) {
                    me.pause();
                    alert('타이머 종료');
                    return false;
                }
                me._ms--;
                me._display();
                me._progress();
            }
        }, 10);
    },

    // count down 시작
    start: function (time) {
        if (this._isStart) {
            return true;
        }

        if (time && typeof time === 'number'
            && time >= 0 && time < TIME.MAX_HOUR) {
            if (!this._isPause) {
                this._input = time;
                this._ms = time * TIME.MAX_MILLISECOND;
            }
            this._isStart = true;
            this._progress();
            return true;
        }
        return false;
    },

    // count down 일시 정지
    pause: function () {
        this._isStart = false;
        this._isPause = true;
    },

    // count down 리셋
    reset: function () {
        this.pause();
        this._isPause = false;
        this._ms = this._input * TIME.MAX_MILLISECOND;
        this._display();
    }
};