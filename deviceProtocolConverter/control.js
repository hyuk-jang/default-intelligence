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
 * @prop {number=} scale 결과값에 곱할 배율
 * @prop {number=} fixed 소수점 처리 할 자리수
 */

module;
