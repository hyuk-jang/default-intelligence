/**
 * @typedef {Object} searchRange searchRange Type
 * @property {string} searchType day, month, year, range
 * @property {string} searchInterval min, min10, hour, day, month, year, range
 * @property {string=} resultGroupType 최종적으로 데이터를 묶을 데이터 형태 min, min10, hour, day, month, year, range
 * @property {string} strStartDate sql writedate range 사용
 * @property {string} strEndDate sql writedate range 사용
 * @property {string} rangeStart Chart 위에 표시될 시작 날짜
 * @property {string} rangeEnd Chart 위에 표시될 종료 날짜
 * @property {string} strStartDateInputValue input[type=text] 에 표시될 시작 날짜
 * @property {string} strEndDateInputValue input[type=text] 에 표시될 종료 날짜
 * @property {string} strBetweenStart static chart 범위를 표현하기 위한 시작 날짜
 * @property {string} strBetweenEnd static chart 범위를 표현하기 위한 종료 날짜
 */

/**
 * @typedef {Object} chartData 차트 그리기 위한 데이터 형태
 * @property {Array} range 날짜 범위
 * @property {Array.<chartSeries>} series 차트를 그리기 위한 각각의 객체 리스트
 */

/**
 * @typedef {Object} chartSeries
 * @property {string} name
 * @property {number[]} data
 * @property {string=} color 차트 색상
 * @property {chartDataOption} option 차트 색상
 */

/**
 * @typedef {Object} chartDataOption
 * @property {number=} sort 차트를 정렬 처리할 순서
 * @property {number} max 해당 RowPacketList 최대 값
 * @property {number} min 해당 RowPacketList 최소 값
 * @property {number} aver 해당 RowPacketList 평균 값
 * @property {string=} scale 원시 데이터에 곱한 가중치 값
 */

/**
 * 인버터 현황 정보
 * @typedef {Object} viewInverterDataPacket
 * @property {number} inverter_seq
 * @property {string} target_id
 * @property {string} target_name
 * @property {string} target_type
 * @property {string} target_category
 * @property {number} amount scale 10:1 인버터 용량
 * @property {string} chart_sort_rank
 * @property {string} compare_inverter_seq
 * @property {string} columnName
 */

/**
 * @typedef {Object} weatherCastRowDataPacket
 * @property {string} view_date 차트에 표현할 Date Format
 * @property {string} group_date 그룹 처리한 Date Format
 * @property {number} avg_sky 평균 운량
 */

/**
 * @typedef {Object} weatherChartOption
 * @property {string} name 기상 데이터 명
 * @property {string} color 차트 색상
 * @property {string} selectKey 데이터 Key
 * @property {string} dateKey 묶는 기준 날짜 ket
 */

/**
 * @typedef {Object} calendarComment
 * @property {string} comment 테스트 내용에 부연 설명을 필요로 할때
 * @property {number} is_error 테스트 에러 여부
 */

/**
 * @typedef {Object} weatherTrend
 * @property {string} view_date 차트에 표현할 Date Format
 * @property {string} group_date 그룹 처리한 Date Format
 * @property {number} avg_sm_infrared 평균 적외선 감지 값
 * @property {number} avg_temp 평균 기온
 * @property {number} avg_reh 평균 습도
 * @property {number} avg_solar 평균 일사량
 * @property {number} total_interval_solar 기간 총 일사량
 * @property {number} avg_ws 평균 풍속
 */

/**
 * @typedef {Object} chartDecoration
 * @property {string} mainTitle
 * @property {string} xAxisTitle
 * @property {string} yAxisTitle
 */

/**
 * @typedef {Object} calcRowPacketIntervalOption
 * @property {string} calcMaxKey
 * @property {string} calcMinKey
 * @property {string} resultKey
 * @property {string} groupKey
 * @property {{dateKey: string, maxRequiredDateSecondValue: number, minRequiredCountKey: string, minRequiredCountValue: number}} rangeOption
 */

module;
