'use strict';

(function () {
    var _mode;   // 'stopwatch' or 'countdown'
    var elemContent = document.querySelector('#content'),
        elemSelectFunction = document.querySelector('#select_function'),
        elemBtnStart = document.querySelector('.btn_start'),
        elemBtnPause = document.querySelector('.btn_pause'),
        elemBtnRecord = document.querySelector('.btn_record'),
        elemBtnReset = document.querySelector('.btn_reset'),
        elemInputTime = document.querySelector('.input_sec input');

    // 초기화
    function init(mode) {
        _mode = mode || 'stopwatch';    // 모드 초기화
        COUNTDOWN.reset();              // 카운트 다운 초기화
        elemInputTime.value = 0;        // 카운트 다운 input box 초기화
        STOPWATCH.reset();              // stop watch 초기화
        elemContent.className = _mode;
    }
    init('stopwatch');

    // 기능 선택
    elemSelectFunction.addEventListener('change', function (e) {
        init(e.target.value || 'stopwatch');
    });

    // 시작 버튼 click
    elemBtnStart.addEventListener('click', function () {
        if (_mode === 'stopwatch') {
            STOPWATCH.start();
        } else {
            if (!COUNTDOWN.start(Number(elemInputTime.value))) {
                alert('입력값이 잘못되었습니다.');
            }
        }
    });

    // 일시정지 버튼 click
    elemBtnPause.addEventListener('click', function () {
        if (_mode === 'stopwatch') {
            STOPWATCH.pause();
        } else {
            COUNTDOWN.pause();
        }
    });

    // 기록 버튼 click
    elemBtnRecord.addEventListener('click', function () {
        if (_mode === 'stopwatch') {
            STOPWATCH.record();
        }
    });

    // 리셋 버튼 click
    elemBtnReset.addEventListener('click', function () {
        if (_mode === 'stopwatch') {
            STOPWATCH.reset();
        } else {
            COUNTDOWN.reset();
        }
    });

})();