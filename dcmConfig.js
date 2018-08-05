'use strict';

/**
 * @desc orderLV1
 * @typedef {Object} combinedOrderStorage 복합 명령 현황 저장소
 * @property {combinedOrderInfo} controlStorage 제어 명령 저장소
 * @property {combinedOrderInfo} cancelStorage 취소 명령 저장소
 * @property {combinedOrderInfo} measureStorage 계측 명령 저장소
 */

/**
 * @desc orderLV2
 * @typedef {Object} combinedOrderInfo 복합 명령 관리 구조
 * @property {Array.<combinedOrderWrapInfo>} waitingList 명령 대기
 * @property {Array.<combinedOrderWrapInfo>} proceedingList 명령 요청 중
 * @property {Array.<combinedOrderWrapInfo>=} runningList 실행되고 있는 명령. combinedOrderList의 controlList에서만 쓰임
 */

/**
 * @desc orderLV3
 * @typedef {Object} combinedOrderWrapInfo 복합 명령을 내릴 경우 포맷(자동 명령, 순회 계측 명령, ...)
 * @property {string} uuid UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {string} requestCommandType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} requestCommandId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} requestCommandName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {Array.<combinedOrderContainerInfo>} orderContainerList 명령을 내릴 목록(여는 목록, 닫는 목록, ...)
 */

/**
 * @desc orderLV4
 * @typedef {Object} combinedOrderContainerInfo 제어 타입에 따른 분류 형식
 * @property {number=} controlValue Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue controlValue 가 2일 경우 설정하는 값
 * @property {Array.<combinedOrderElementInfo>} orderElementList 실제 controlValue 제어를 요청할 목록
 */

/**
 * @desc orderLV5
 * @typedef {Object} combinedOrderElementInfo 실제 장치를 제어할 세부 내용
 * @property {boolean} hasComplete 해당 작업 완료 여부
 * @property {string} uuid UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string=} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 */

/**
 * @typedef {Object} executeOrderInfo 복합 명령을 내릴 경우
 * @property {string} integratedUuid 통합 명령 UUID로 combinedOrderWrapInfo uuid 사용.
 * @property {string} requestCommandType  'CONTROL', 'CANCEL', --> 명령 추가, 명령 삭제
 * @property {string} requestCommandId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} requestCommandName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {number=} controlValue Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue controlValue 가 2일 경우 설정하는 값
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string} uuid 해당 명령 UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {string} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 */

/**
 * @typedef {Object} requestSingleOrderInfo 단일 명령을 내릴 경우
 * @property {string} requestCommandType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제, 계측 명령 추가
 * @property {number=} controlValue Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue controlValue 가 2일 경우 설정하는 값
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} requestCombinedOrderInfo 복합 명령을 내릴 경우
 * @property {string} requestCommandType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} requestCommandId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} requestCommandName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {requestOrderElementInfo[]} requestElementList
 */

/**
 * @typedef {Object} requestOrderElementInfo 컨트롤러에 장치로 명령을 내릴때 사용하는 형식
 * @property {number=} controlValue Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue controlValue 가 2일 경우 설정하는 값
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} integratedDataLoggerConfig dataLogger 들을 총 관리하는 객체 설정 변수
 * @property {dbInfo} dbInfo
 * @property {constructorSocketWithParser} mainSocketInfo Main Socket Server 에 접속하고 명령을 주고 받기 위한 Client 생성 정보
 * @property {string} uuid 데이터 수집 관리자의 Main UUID, Web Server Socket Server로 접속할 때 식별 및 임시 인증으로 사용
 * @property {dataLoggerConfig[]} dataLoggerList
 */

/**
 * @typedef {Object} dataLoggerConfig 장치를 가져올 로거 컨트롤러 생성 정보
 * @property {boolean} hasDev
 * @property {deviceInfo} deviceInfo
 * @property {dataLoggerInfo} dataLoggerInfo
 * @property {Array.<nodeInfo>} nodeList
 */

/**
 * @typedef {Object} nodeInfo 노드 정보
 * @property {number} node_seq node ID (Sequence)
 * @property {string} node_real_id DB상에서 고유한 Node ID
 * @property {string} node_id Main 당 일반적으로 부를 Node ID
 * @property {string} node_name Main 당 일반적으로 부를 Node Name
 * @property {string} target_code Node Numbering 번호 (001, 002, ...)
 * @property {number} data_logger_index Data Logger에서 수집한 데이터 군 중에서 해당 센서 데이터가 위치하는 인덱스
 * @property {string} nd_target_id Node 실제 데이터 Key로 DeviceProtocolConverter Data Key에 사용
 * @property {string} nd_target_name Node 장치 실체적 이름
 * @property {string} nc_target_id Node Unique Key 로 사용되는 ID
 * @property {string} nc_data_unit 표기 단위(℃, %, m/s, ppm, ...)
 * @property {number} nc_is_sensor 센서 여부 (데이터가 수치로 표기되면 센서, 아니면 장치), DB에 센서라면 sensor_data에 저장, 장치라면 device_data에 저장
 * @property {string} dl_real_id DB상에서 고유한 Logger ID
 * @property {string} dl_id Main당 일반적으로 부를 Logger ID
 * @property {number} node_def_seq Node Definition Table Sequence
 * @property {number} node_class_seq Node Class Sequence
 * @property {number} main_seq Main Sequence
 * @property {number} data_logger_seq Data Logger Sequence
 * @property {number} data 노드 데이터
 * @property {function():dataLoggerInfo} getDataLogger 연결된 Data Logger 가져오기
 * @property {Date} writeDate 데이터가 입력된 시간
 */

/**
 * @typedef {Object} dataLoggerInfo
 * @property {number} main_seq Main Sequence
 * @property {number} data_logger_seq Data Logger Sequence
 * @property {number} data_logger_def_seq Data Logger Definition Sequence
 * @property {string} dl_real_id DB상에서 고유한 Logger ID
 * @property {string} dl_id Main당 일반적으로 부를 Logger ID
 * @property {string} target_id Data Logger 고유 코드(protocol_info 에 보통 국번으로 들어감)
 * @property {string} target_alias Data Logger 이름
 * @property {string} target_code Data Logger Numbering 번호 (001, 002, ...)
 * @property {connect_info} connect_info
 * @property {protocol_info} protocol_info
 */

/**
 * @typedef {Object} defaultManagerConfig
 * @property {dbInfo} dbInfo
 * @property {Array.<defaultControlConfig>} deviceControllerList
 */

/**
 * @typedef {Object} defaultDataLoggerConfig 센서 장치를 가져올 컨트롤러 생성 정보
 * @property {number} main_seq 가져올 Main ID
 * @property {number} searchInterval 계측 주기 (1, 60, 600, 3600, ...)
 * @property {dbInfo} dbInfo DB 설정 정보
 */

/**
 * @typedef {Object} defaultControlConfig
 * @property {boolean} hasDev
 * @property {deviceInfo} deviceInfo
 */

/**
 * @typedef {Object} dbInfo DB 생성 설정 정보
 * @property {string} host 접속 ip
 * @property {string} port 접속 port
 * @property {string} database 사용 database
 * @property {string} user 사용자 id
 * @property {string} password 사용자 pw
 */

/**
 * @typedef {Object} deviceInfo deviceInfo 생성 자료 구조
 * @property {string} target_id device ID (dialing, id, ...)
 * @property {string} target_category inverter, connector, weather
 * @property {string=} target_name IVT_001, IVT_002, 인버터 1, alias
 * @property {logOption=} logOption 일어나는 이벤트에 대해 FileSystem 처리할 항목
 * @property {controlInfo} controlInfo DCC를 제어하는데 있어 운영상 필요한 boolean 값 모음
 * @property {connect_info} connect_info 장치와의 접속 정보
 * @property {protocol_info} protocol_info 프로토콜 생성자에 넘겨줄 설정 데이터
 */

/**
 * @typedef {Object} controlInfo DCC를 제어하는데 있어 운영상 필요한 boolean 값 모음
 * @prop {boolean} hasOneAndOne 계속하여 연결을 수립할지 여부
 * @prop {boolean} hasErrorHandling 에러가 발생하였을 경우 다음 명령 진행을 멈출지 여부
 * @prop {boolean} hasReconnect 장치의 연결이 끊겼을 경우 자동으로 재접속을 수행할지 여부
 */

/**
 * @typedef {Object} logOption 일어나는 이벤트에 대해 FileSystem 처리할 항목
 * @property {boolean} hasDcEvent Connect, Disconnect
 * @property {boolean} hasDcError Timeout, Incorrect, Unhandling, ...
 * @property {boolean} hasDcMessage ExecutionTerminate, OneAndOne, Delete Success
 * @property {boolean} hasTransferCommand 요청 Data
 * @property {boolean} hasCommanderResponse 데이터에 대한 Commander의 요청
 * @property {boolean} hasReceiveData 수신 Data
 */

/**
 * @typedef {Object} connect_info 장치와의 접속 정보
 * @property {string} type 'socket', 'serial', 'zigbee', ...
 * @property {string=} subType 'parser', 'xbee', ....
 * @property {number=} baudRate
 * @property {string=} host 접속 경로(socket 일 경우 사용)
 * @property {number|string=} port 접속 포트
 * @property {Object=} addConfigInfo type, subType의 Contoller에서 요구하는 추가 접속 정보
 */

/**
 * @typedef {Object} protocol_info 프로토콜 생성자에 넘겨줄 설정 데이터
 * @property {string} mainCategory
 * @property {string} subCategory
 * @property {string|Buffer} deviceId
 * @property {protocolOptionInfo=} protocolOptionInfo
 * @property {Object=} option
 */

/**
 * @typedef {Object} protocolOptionInfo
 * @property {boolean} hasTrackingData  전송 데이터가 같으나 파싱이 실패할 경우 데이터 누적을 할지 여부 (Default: false)
 */

module;
