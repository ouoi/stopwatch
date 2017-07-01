/**
 * stop watch module
 *
 * @author      ldw
 * @email       ouoiouoi@gmail.com
 * @version     1.0.0 2017.06.26
 */
'use strict';

var STOPWATCH = {
    _ms: 0,             // 1/100 초
    _isStart: false,    // 진행중 여부
    _countRecord: 0,    // 기록 횟수
    _maxRecord: 5,      // 기록 가능 횟수
    _elemTime: document.querySelector('.time'),
    _elemRecordList: document.querySelector('.record_list'),

    // 시간 출력
    _display: function () {
        this._elemTime.innerHTML = TIME.displayTime(this._ms);
    },

    // 10ms씩 시간 증가
    _progress: function () {
        var me = this;
        setTimeout(function () {
            if (me._isStart) {
                me._ms++;
                me._display();
                me._progress();
            }
        }, 10);
    },

    // stop watch 시작
    start: function () {
        if (this._isStart) {
            return true;
        }

        this._isStart = true;
        this._progress();
    },

    // stop watch 일시 정지
    pause: function () {
        this._isStart = false;
    },

    // stop watch 리셋
    reset: function () {
        this.pause();
        this._ms = 0;
        this._display();
        this._resetRecord();
    },

    // stop watch 기록
    record: function () {
        if (this._countRecord < this._maxRecord) {
            var elemLi = document.createElement('LI');
            elemLi.innerHTML = TIME.displayTime(this._ms);
            this._elemRecordList.appendChild(elemLi);
            this._countRecord++;
        } else {
            alert('기록은 총 ' + this._maxRecord + '번 가능합니다.');
        }
    },

    // stop watch 기록 초기화
    _resetRecord: function () {
        this._countRecord = 0;
        this._elemRecordList.innerHTML = '';
    }
};