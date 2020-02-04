/**
 * @typedef {Object} defaultFormatToRequest 요청한 객체에게 응답하는 기본 형식
 * @property {stirng} commandId 요청 ID
 * @property {stirng=} uuid 고유 식별 ID
 * @property {*} contents 요청할 상세 내용
 */

/**
 * @typedef {Object} defaultFormatToResponse 요청한 객체에게 응답하는 기본 형식
 * @property {stirng} commandId 요청 ID를 그대로 반환
 * @property {stirng=} uuid 고유 식별 ID를 그대로 반환
 * @property {number} isError 명령 수행 실패 여부(해당 Key가 있으면 Response, 없으면 Request로 식별함)
 * @property {string} message 세부 메시지
 * @property {*} contents 정상적인 응답인 경우 응답 결과를 넣고자 할 경우 넣어서 반환
 */

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
 * @typedef {Object} decodingProtocolInfo 생성시킬 명령을 호출하는 형식
 * @property {string|Buffer} dialing 생성 시킬 명령 고유 키(각 프로토콜 컨버터마다 존재. 해당 API 참조)
 * @property {string=} address 명령 시작 번지
 * @property {number=} bodyLength Body Length
 * @property {Array.<decodingInfo>} decodingDataList 상세 프로토콜 정보
 */

/**
 * @typedef {Object} decodingInfo 수신받은 Buffer 데이터를 Parsing 하는데 필요한 정보
 * @property {string} key baseFormat Key
 * @property {string=} decodingKey 데이터 변환이 필요한 경우
 * @property {number=} startIndex 시작
 * @property {number=} byte default 1. Byte Length.
 * @property {string} callMethod Protocol Converter에 저장되어 있는 메소드 명
 * @property {number=} scale 결과값에 곱할 배율
 * @property {number=} fixed 소수점 처리 할 자리수
 * @property {boolean=} isLE 소수점 처리 할 자리수
 * @property {boolean=} isUnsigned 소수점 처리 할 자리수
 */

/**
 * @typedef {Object} troubleInfo
 * @property {string} code
 * @property {string} msg
 * @property {number=} isError 에러 여부. 기본 값 1
 */

module;
