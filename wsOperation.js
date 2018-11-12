/**
 * @typedef {Object} searchRangeConfig searchRange를 만들기 위한 설정 정보
 * @property {string} searchType day, month, year, range
 * @property {string} searchInterval min, min10, hour, day, month, year, range
 * @property {string} searchOption merge, individual
 * @property {string} strStartDate 시작 일 (YYYY-MM-DD HH:mm:ss) 형식으로 이루어짐
 * @property {string} strEndDate 종료 일 (YYYY-MM-DD HH:mm:ss) 형식으로 이루어짐
 */

/**
 * @typedef {Object} searchRange searchRange Type
 * @property {string} realSearchType range단위를 환산한 실제 단위 [day, month, year]
 * @property {string} searchType day, month, year, range
 * @property {string} searchInterval min, min10, hour, day, month, year, range
 * @property {string} searchOption merge, individual
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
 * @typedef {Object} chartOption
 * @property {string} selectKey Chart에 표현할 Key
 * @property {string} dateKey 차트 리스트 범위를 참조할 Key
 * @property {string=} maxKey 최대 값 구할 키
 * @property {string=} minKey 최소 값 구할 키
 * @property {string=} averKey 평균 값 구할 키
 * @property {string=} groupKey rowDataPacketList를 Group 처리 할 Key
 * @property {string=} sortKey 정렬 순위를 참조할 Key
 * @property {string=} colorKey Chart Line 색상
 * @property {boolean=} hasArea Area로 설정할 여부
 */

/**
 * @typedef {Object} calcRowPacketIntervalOption
 * @property {string} calcMaxKey
 * @property {string} calcMinKey
 * @property {string} resultKey
 * @property {string} groupKey
 * @property {{dateKey: string, maxRequiredDateSecondValue: number=, minRequiredCountKey: string, minRequiredCountValue: number=}} rangeOption
 */

/**
 * @desc BiModule.makeDateFormatForReport
 * @typedef {Object} dateFormatWithSearchRange searchRange와 dateName에 따라서 dateFormat을 정의하여 반환
 * @property {string} firstGroupByFormat 2중 Query로 데이터를 가지고 올 경우 1번째 Query문의 Grouping Date Format.
 * @property {string} groupByFormat 최종으로 묶을 데이터 Format
 * @property {string} selectGroupDate group_date.사용자에게 최종 Grouping 처리한 Date Key를 보여주기 위함
 * @property {string} selectViewDate view_date. selectGroupDate Format은 너무 길기 때문에 간소화 시킨 Format
 * @property {number} devideTimeNumber 출력의 평균 값 산출에 사용됨: 1시간에 몇개의 데이터가 포함되는지 여부.
 * @example
 * ---> firstGroupByFormat
 * min --> DATE_FORMAT(${dateName},"%Y-%m-%d %H:%i"),
 * 이외 --> LEFT(DATE_FORMAT(${dateName},"%Y-%m-%d %H:%i"), 15, 1시간 단위로 요청이 들어올 경우에도 동일
 * ---> groupByFormat
 * min10 --> LEFT(DATE_FORMAT(${dateName},"%Y-%m-%d %H:%i"), 15
 * 이외 --> year: %Y, month: %Y-%m ... 이하 줄임
 * ---> selectGroupDate
 * min10 --> CONCAT(LEFT(DATE_FORMAT(${dateName},"%Y-%m-%d %H:%i"), 15), "0")  AS group_date
 * 이외 --> DATE_FORMAT(${dateName},"${dateFormat}") AS group_date
 */

module;
