/**
 * @typedef {Object} baseModelDeviceStructure
 * @property {string} KEY 해당 Model을 관리할 ID로 데이터 저장 Key 로 사용
 * @property {string=} NAME 장치 모델 명
 * @property {Object=} STATUS 현자 상태 값
 * @property {Object} COMMAND 명령 정보
 */

/**
 * @typedef {Object} commandInfoModel
 * @property {stirng} cmd 명령
 * @property {number=} timeout 해당 명령을 수행하기 까지 지연 시간
 */

/**
 * @typedef {Object} parsingResultFormat
 * @property {string} eventCode Parsing 결과 Event Code
 * @property {*} data Parsing 결과 반환 Data
 * @example
 * eventCode ---->
 * 'wait' : 대기
 * 'request' : 명령 재 전송
 * 'done' : Parsing 성공
 * 'fail' : Parsing 실패
 */

/**
 * @typedef {Object} generationCmdConfig 생성시킬 명령을 호출하는 형식
 * @property {string} cmdKey 생성 시킬 명령 고유 키(각 프로토콜 컨버터마다 존재. 해당 API 참조)
 * @property {string=} target 작동 시킬 대상(각 프로토콜 컨버터마다 존재. 해당 API 참조)
 */

/**
 * @typedef {Object} decodingInfo 수신받은 Buffer 데이터를 Parsing 하는데 필요한 정보
 * @property {string} key baseFormat Key
 * @property {number} byte Byte Length
 * @property {number=} startIndex 시작
 * @property {string} callMethod Protocol Converter에 저장되어 있는 메소드 명
 * @property {boolean=} hasReverse Buffer의 역정렬 여부 (기본값 False)
 * @prop {number=} scale 결과값에 곱할 배율
 * @prop {number=} fixed 소수점 처리 할 자리수
 */

module;
