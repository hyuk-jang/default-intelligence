/**
 * @desc Command Storage
 * @typedef {Object} tttt 명령 달성 제한 조건
 * @property {string} wrapCmdUUID 해당 명령의 최대 수행 가동 시간
 * @property {number=} limitTimeSec 해당 명령의 최대 수행 가동 시간
 * @property {Object[]} goalDataList 해당 명령을 통해 얻고자 하는 값 목록
 * @property {string} goalDataList.nodeId 달성하고자 하는 nodeId
 * @property {string|number} goalDataList.goalValue 달성 기준치 값
 * @property {string} goalDataList.goalRange 기준치 인정 범위.
 * @example
 * goalRange: -1 goalValue 보다 작은
 * goalRange: 0 goalValue 와 같은
 * goalRange: 1 goalValue 보다 큰
 */

/**
 * @desc Command Storage
 * @typedef {Object} csCmdGoalContraintInfo 명령 달성 제한 조건
 * @property {number=} limitTimeSec 해당 명령의 최대 수행 가동 시간. 해당 시간이 완료할 때까지 goal을 만족하지 못한다면 복구 명령 요청
 * @property {csCmdGoalInfo[]} goalDataList 해당 명령을 통해 얻고자 하는 값 목록
 */

/**
 * @desc Command Storage
 * @typedef {Object} csCmdGoalInfo 명령 달성 제한 조건
 * @property {string} nodeId 달성하고자 하는 nodeId
 * @property {string|number} goalValue 달성 기준치 값
 * @property {number} goalRange 기준치 인정 범위.
 * @property {boolean} isCompleteClear 기본 값 false, 이 옵션이 있다면 이 요건만 충족하면 완료 된 것으로 판단. 아니라면 전체 Goal 달성 해야함
 * @example
 * goalRange: 0 goalValue 보다 작은
 * goalRange: 1 goalValue 와 같은
 * goalRange: 2 goalValue 보다 큰
 */

/**
 * @desc Command Storage
 * @typedef {Object} csOverlapControlStorage 모든 노드 제어 호출 정보
 * @property {nodeInfo} nodeInfo 노드 정보
 * @property {csOverlapControlInfo[]} overlapControlList 노드 별 제어 호출 정보 목록
 */

/**
 * @desc Command Storage
 * @description WCU: Wrap Command UUID
 * @typedef {Object} csOverlapControlInfo 노드 별 제어 호출 정보
 * @property {number} singleControlType 0(False), 1(True), 2(Measure), 3(Set) [reqDeviceControlType]
 * @property {number|string=} controlSetValue 설정 제어 값
 * @property {string[]} overlapWCUs 누적 호출 중 WCU List (자동모드에서 사용). 목록 제거 시 복구 명령 생성.
 * @property {string[]} overlapLockWCUs 조건 명령 호출 중 WCU List(수동, 자동모드에서 사용), 목록 제거시 조건 명령 목록에서 삭제.
 * @property {string} reservedExecUU DCC 명령 Stack에 올라간 Unit UUID (수동, 자동모드에서 사용)
 * @example
 * singleControlType
 * 0: Close, Off
 * 1: Open, On
 * undefined, 2: Status
 * 3: Set   --> controlSetValue 가 필수적으로 입력, Set은 차후에 처리(FIXME)
 */

/**
 * @desc Command Storage
 * @typedef {Object} csOverlapControlHandleConfig Overlap Control 을 조회하거나 생성할 때 필요한 옵션
 * @property {string=} nodeId 찾을려는 노드. By nodeId (nodeId or nodeInfo Use)
 * @property {nodeInfo=} nodeInfo 찾을려는 노드. By nodeInfo (nodeId or nodeInfo Use)
 * @property {string} singleControlType 0(False), 1(True), 2(Measure), 3(Set)
 * @property {number|string=} controlSetValue,
 */

/**
 * @desc Command Storage
 * @typedef {Object} csControlOverlap 노드 당 컨트롤 호출 정보
 * @property {nodeInfo} nodeInfo Node ID
 * @property {Object} singleControlTypeList 해당 장치에 걸려있는 누적 호출 수
 * @property {number} overlapLockCount goal 목표치가 걸려있는 명령 누적 호출 수
 * @example
 * overlapCount = 0 : 아무런 장치에 대한 제약 조건 없음
 * overlapCount < 0 : 장치에 대한 False 호출 중첩 수 (Close, Off)
 * overlapCount > 0 : 장치에 대한 True 호출 중첩 수 (Open, On)
 */

/**
 * @typedef {Object} timeIntervalToValidateInfo 데이터의 유효성을 인정해주는 시간 간격 정보
 * @property {string} diffType 시간 간격 타입(months, weeks, days,	hours, minutes, seconds, and milliseconds)
 * @property {number} duration 지속 시간. 이를 벗어나면 유효한 데이터가 아님
 */

/**
 * @typedef {Object} reqCommandInfo 복합 명령을 내릴 경우
 * @property {string} wrapCmdFormat 'SINGLE', 'FLOW' 'SET'
 * @property {string} wrapCmdType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string=} srcPlaceId FLOW FORMAT 일 경우 출발 장소 ID
 * @property {string=} destPlaceId FLOW  FORMAT 일 경우 출발 장소 ID
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo 명령 달성 제한 조건
 * @property {reqCmdEleInfo[]} reqCmdEleList
 */

// * @property {refineCmdEleInfo[]} refineCmdEleList

/**
 * @typedef {Object} reqCmdEleInfo 컨트롤러에 장치로 명령을 내릴때 사용하는 형식
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string|string[]=} dataLoggerId Main 당 일반적으로  혹은 Data Logger ID
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID
 * @property {string[]} searchIdList dataLoggerId or nodeId
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @desc Command LV 1
 * @typedef {Object} commandWrapInfo 복합 명령을 내릴 경우 포맷(자동 명령, 순회 계측 명령, ...)
 * @property {string} controlMode 현재 명령이 요청된 시점의 제어 모드
 * @property {string} wrapCmdFormat 'SINGLE', 'FLOW' 'SET'
 * @property {string} wrapCmdType 'CONTROL', 'RESTORE' 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string=} srcPlaceId FLOW FORMAT 일 경우 출발 장소 ID
 * @property {string=} destPlaceId FLOW FORMAT 일 경우 도착 장소 ID
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo Automatic Mode Only. 복합 명령이 가지는 목표 데이터 범위 목록. 목표를 달성하면 명령 스택에서 삭제.
 * @property {reqCmdEleInfo[]} reqCmdEleList
 * @property {commandContainerInfo[]} containerCmdList 명령을 내릴 목록(여는 목록, 닫는 목록, ...)
 * @property {commandContainerInfo[]} realContainerCmdList 실제 명령을 내릴 목록(여는 목록, 닫는 목록, ...)
 */

/**
 * @desc Complex Command LV 2
 * @typedef {Object} commandContainerInfo 제어 타입에 따른 분류 형식
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string[]} nodeIdList Node Id 목록
 */

/**
 * @desc Complex Command LV 1
 * @typedef {Object} complexCmdWrapInfo 복합 명령을 내릴 경우 포맷(자동 명령, 순회 계측 명령, ...)
 * @property {string} controlMode 현재 명령이 요청된 시점의 제어 모드
 * @property {string} wrapCmdFormat 'SINGLE', 'FLOW' 'SET'
 * @property {string} wrapCmdType 'CONTROL', 'RESTORE' 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdStep 'WAIT', 'PROCEED', 'RUNNING'
 * @property {string} wrapCmdUUID UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {string} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {string=} srcPlaceId FLOW FORMAT 일 경우 출발 장소 ID
 * @property {string=} destPlaceId FLOW FORMAT 일 경우 도착 장소 ID
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo Automatic Mode Only. 복합 명령이 가지는 목표 데이터 범위 목록. 목표를 달성하면 명령 스택에서 삭제.
 * @property {complexCmdContainerInfo[]} containerCmdList 명령을 내릴 목록(여는 목록, 닫는 목록, ...)
 * @property {complexCmdContainerInfo[]} realContainerCmdList 실제 명령을 내릴 목록(여는 목록, 닫는 목록, ...)
 */

/**
 * @desc Complex Command LV 2
 * @typedef {Object} complexCmdContainerInfo 제어 타입에 따른 분류 형식
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 1: Open, On, ... ::: 0: Close, Off, undefind: Status
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {complexCmdEleInfo[]} eleCmdList 실제 singleControlType 제어를 요청할 목록
 */

/**
 * @desc Complex Command LV 3
 * @typedef {Object} complexCmdEleInfo 실제 장치를 제어할 세부 내용
 * @property {boolean} hasComplete 해당 작업 완료 여부
 * @property {string} uuid UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string=} nodeId Main 당 일반적으로 부를 Node ID 혹은 Data Logger ID
 */

/**
 * @typedef {Object} executeCmdInfo 복합 명령을 내릴 경우
 * @property {string} wrapCmdUUID 통합 명령 UUID로 complexCmdWrapInfo uuid 사용.
 * @property {string} wrapCmdType  'CONTROL', 'CANCEL', --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값. 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 * @property {string} uuid 해당 명령 UUID. 유일 키로 명령 요청 시 동적으로 생성 및 부여
 * @property {string|string[]=} dataLoggerId Main 당 일반적으로  혹은 Data Logger ID
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID
 * @property {string|string[]=} searchId dataLoggerId or nodeId
 */

/**
 * @typedef {Object} reqMeasureCmdInfo 계측 명령을 내릴 경우
 * @property {string} wrapCmdType  'CONTROL', 'CANCEL', --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdId  명령 Id
 * @property {string} wrapCmdName  명령 Name
 * @property {string[]} searchIdList Node IDs or Data Logger Ids
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} reqSingleCmdInfo 단일 명령을 내릴 경우
 * @property {string} wrapCmdType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제, 계측 명령 추가
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string|string[]} nodeId Node ID
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} reqFlowCmdInfo 흐름 명령을 내릴 경우
 * @property {string} wrapCmdType  'CONTROL', 'RESTORE', 'CANCEL',  --> 명령 추가, 명령 복구, 명령 삭제
 * @property {string} srcPlaceId 시작 장소 ID
 * @property {string} destPlaceId 목적지 장소 Id
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:2)
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo 명령 달성 제한 조건
 */

/**
 * @typedef {Object} reqSetCmdInfo 설정 명령을 내릴 경우
 * @property {string} wrapCmdType  'CONTROL', 'RESTORE', 'CANCEL',  --> 명령 추가, 명령 복구, 명령 삭제
 * @property {string} wrapCmdId 설정 명령 ID
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:2)
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo 명령 달성 제한 조건
 */

/**
 * @typedef {Object} refineCmdEleInfo 컨트롤러에 장치로 명령을 내릴때 사용하는 형식
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string} searchId dataLoggerId or nodeId
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} reqComplexCmdInfo 복합 명령을 내릴 경우
 * @property {string} wrapCmdFormat 'SINGLE', 'FLOW' 'SET'
 * @property {string} wrapCmdType  'CONTROL', 'CANCEL', 'MEASURE' --> 명령 추가, 명령 삭제
 * @property {string} wrapCmdId 명령을 내릴 때 해당 명령의 고유 ID(mode5, mode3, ...)
 * @property {string} wrapCmdName 명령을 내릴 때 부를 이름(증발지1 -> 저수지1, ...)
 * @property {string=} srcPlaceId FLOW FORMAT 일 경우 출발 장소 ID
 * @property {string=} destPlaceId FLOW  FORMAT 일 경우 출발 장소 ID
 * @property {csCmdGoalContraintInfo=} wrapCmdGoalInfo 명령 달성 제한 조건
 * @property {reqCmdEleInfo[]} reqCmdEleList
 */

/**
 * @typedef {Object} reqCmdEleInfo 컨트롤러에 장치로 명령을 내릴때 사용하는 형식
 * @property {number=} singleControlType Device Protocol Converter에 요청할 명령에 대한 인자값 0: 장치 Close, Off, 1: 장치 Open, On, 2: 장치 Measure, 3: 장치 값 설정
 * @property {number=} controlSetValue singleControlType 가 SET(3)일 경우 설정하는 값
 * @property {string|string[]=} dataLoggerId Main 당 일반적으로  혹은 Data Logger ID
 * @property {string|string[]=} nodeId Main 당 일반적으로 부를 Node ID
 * @property {string[]} searchIdList dataLoggerId or nodeId
 * @property {number=} rank 명령의 우선 순위. 낮을 수록 먼저 실행 (Default:3)
 */

/**
 * @typedef {Object} integratedDataLoggerConfig dataLogger 들을 총 관리하는 객체 설정 변수
 * @property {projectInfo} projectInfo
 * @property {dbInfo} dbInfo
 * @property {string} uuid 데이터 수집 관리자의 Main UUID, Web Server Socket Server로 접속할 때 식별 인증으로 사용
 * @property {inquirySchedulerInfo} inquirySchedulerInfo DBS, DBP에서 정기 계측 조회 옵션을 설정하기 위한 정보
 * @property {dataLoggerConfig[]} dataLoggerList
 */

/**
 * @typedef {Object} projectInfo DBS에서 분기 처리할 프로젝트 정보
 * @property {string} projectMainId UPSAS, FP, ...
 * @property {string} projectSubId Muan, 100kW, ...
 * @property {dbsFeatureConfig} featureConfig
 */

/**
 * @typedef {Object} dbsFeatureConfig 생성된 Feature를 구동시킴
 * @property {connect_info=} apiConfig Web Server API Communication Socket 접속 정보
 * @property {connect_info=} powerStatusBoardConfig 태양광 현황판 접속 정보
 */

/**
 * @typedef {Object} inquirySchedulerInfo DBS에서 하부 DLC의 상태를 정기 조회할 명령에 대한 정보
 * @property {string} intervalCronFormat 크론 데이터 형식 (* * * * * *)
 * @property {number} inquiryWaitingSecond DBP에서 정기 계측 명령 Timeout을 적용할 시간. 무한정 기다릴 수 없는 용도로 사용
 * @property {number} intervalSaveCnt 정기 계측 횟수 당 저장을 수행할 수
 * @property {Object} validInfo 현재 시간과의 차를 계산할 정보
 * @property {string} validInfo.diffType 현재 시간을 기준으로 데이터의 경과된 시간 검증할 데이트 타입
 * @property {number} validInfo.duration 2분을 벗어나면 데이터 가치가 없음
 * @example
 * intervalCronFormat: *(초) *(분) *(시) *(일) *(월) *(주)
 * Seconds: 0-59
 * Minutes: 0-59
 * Hours: 0-23
 * Day of Month: 1-31
 * Months: 0-11 (Jan-Dec)
 * Day of Week: 0-6 (Sun-Sat)
 */

/**
 * @typedef {Object} flowCmdInfo
 * @property {string} srcPlaceId 시작 장소 ID
 * @property {string} srcPlaceName 시작 장소 명
 * @property {flowCmdDestInfo[]} destList 목적지 장소 목록
 */

/**
 * @typedef {Object} flowCmdDestInfo
 * @property {string} destPlaceId 목적지 장소 Id
 * @property {string} destPlaceName 목적지 장소 명
 * @property {string} cmdId 명령 이름 영어(srcPlaceId_TO_destPlaceId)
 * @property {string} cmdName 명령 이름 한글(srcPlaceId → destPlaceId)
 * @property {string} actionType common(에뮬레이터, 실제 동작) or controller(실제 동작) or emulator(에뮬레이터)
 * @property {string[]} trueNodeList Open, On 등 장치 동작 수행
 * @property {string[]} falseNodeList Close, Off 등 장치 동작 정지
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
 * @property {string} dl_real_id DB상에서 고유한 Logger ID
 * @property {string} dl_id Main당 일반적으로 부를 Logger ID
 * @property {string} dl_name 데이터 로거 명
 * @property {string} data_unit 표기 단위(℃, %, m/s, ppm, ...)
 * @property {string} save_db_type ENUM('device','sensor', 'block', 'trouble', 'none')
 * @property {number} is_avg_center 중앙 값 사용 여부
 * @property {number} is_sensor 센서 여부 (데이터가 수치로 표기되면 센서, 아니면 장치), DB에 센서라면 sensor_data에 저장, 장치라면 device_data에 저장
 * @property {number} data_logger_index Data Logger에서 수집한 데이터 군 중에서 해당 센서 데이터가 위치하는 인덱스
 * @property {string} n_target_code Node Numbering 번호 (001, 002, ...)
 * @property {string} nd_target_id Node 실제 데이터 Key로 DeviceProtocolConverter Data Key에 사용
 * @property {string} nd_target_name Node 장치 실체적 이름
 * @property {string} nd_target_prefix Node 접두사
 * @property {string} nd_description 노드 개요 설명
 * @property {string} nc_target_id Node Unique Key 로 사용되는 ID
 * @property {string} nc_target_name 대분류 장치 명
 * @property {string} nc_description 대분류 설명
 * @property {number} node_def_seq Node Definition Table Sequence
 * @property {number} node_class_seq Node Class Sequence
 * @property {number} main_seq Main Sequence
 * @property {number} data_logger_seq Data Logger Sequence
 * @property {number} data 노드 데이터
 * @property {function():dataLoggerInfo} getDataLogger 연결된 Data Logger 가져오기
 * @property {Date} writeDate 데이터가 입력된 시간
 * @property {boolean=} isSubmitDBW dbw 로 데이터를 전송 여부
 */

/**
 * @typedef {Object} dataLoggerInfo
 * @property {number} main_seq Main Sequence
 * @property {number} data_logger_seq Data Logger Sequence
 * @property {number} data_logger_def_seq Data Logger Definition Sequence
 * @property {string} dl_real_id DB상에서 고유한 Logger ID
 * @property {string} dl_id Main당 일반적으로 부를 Logger ID
 * @property {string} dl_name 데이터로거 명
 * @property {string} serial_number Data Logger 고유 코드(protocol_info 에 보통 국번으로 들어감)
 * @property {string} dl_target_code Data Logger Numbering 번호 (001, 002, ...)
 * @property {string} dld_target_name Data Logger 이름
 * @property {string} dld_target_prefix Data Logger 접두사
 * @property {connect_info} connect_info Device Client Controller 라이브러리 생성자에게 넘겨줄 생성 정보
 * @property {protocol_info} protocol_info Device Protocol Converter 라이브러리 생성자에게 넘겨줄 생성 정보
 */

/**
 * @typedef {Object} placeInfo
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} place_def_seq 장소 개요 정보 시퀀스
 * @property {number} place_class_seq 장소 대분류 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} uuid uuid
 * @property {string} m_name 지역 이름
 * @property {string} place_id
 * @property {string} place_real_id
 * @property {string} place_name
 * @property {string} p_target_code 장소 번호
 * @property {string} p_target_name 장소 명
 * @property {number} depth 장소 상대적 위치
 * @property {string} place_info 장소 상세 정보
 * @property {string} chart_color 차트 색상
 * @property {number} chart_sort_rank 차트 정렬 순위
 * @property {string} pd_target_prefix 장소 접두사
 * @property {string} pd_target_id 장소 개요 id
 * @property {string} pd_target_name 이름
 * @property {string} pc_target_id 장소 id
 * @property {string} pc_target_name 장소 대분류 명
 * @property {string} pc_description 장소 분류 설명
 * @property {nodeInfo[]} nodeList 장소 분류 설명
 * @property {mPlaceInfo=} autoFlowInfo 스마트 염전 자동 프로세스 제어 정보
 */

/**
 * @typedef {Object} defaultDataLoggerConfig 센서 장치를 가져올 컨트롤러 생성 정보
 * @property {number} main_seq 가져올 Main ID
 * @property {number} searchInterval 계측 주기 (1, 60, 600, 3600, ...)
 * @property {dbInfo} dbInfo DB 설정 정보
 */

/**
 * @typedef {Object} defaultManagerConfig
 * @property {dbInfo} dbInfo
 * @property {string} uuid Main ID
 * @property {number} inquiryIntervalSecond 정기 장치 상태 조회 시간 (sec)
 * @property {number} inquiryWaitingSecond 정기 장치 상태 응답을 기다리는 시간(sec)
 * @property {deviceInfo[]} deviceConfigList
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
 * @property {string=} target_name DLC or PC Name, IVT_001, IVT_002, 인버터 1, alias
 * @property {logOption=} logOption Device Client Controller 객체에서 일어나는 이벤트에 대해 FileSystem 처리할 항목
 * @property {controlInfo} controlInfo Device Client Controller 객체를 제어하는데 있어 운영상 필요한 boolean 값 모음
 * @property {connect_info} connect_info Device Client Controller 라이브러리 생성자에게 넘겨줄 생성 정보
 * @property {protocol_info} protocol_info Device Protocol Converter 라이브러리 생성자에게 넘겨줄 생성 정보
 */

/**
 * @typedef {Object} controlInfo Device Client Controller 객체를 제어하는데 있어 운영상 필요한 boolean 값 모음
 * @prop {boolean} hasOneAndOne 계속하여 연결을 수립할지 여부
 * @prop {boolean} hasErrorHandling 에러가 발생하였을 경우 다음 명령 진행을 멈출지 여부
 * @prop {boolean} hasReconnect 장치의 연결이 끊겼을 경우 자동으로 재접속을 수행할지 여부
 */

/**
 * @typedef {Object} logOption Device Client Controller 객체에서 일어나는 이벤트에 대해 FileSystem 처리할 항목
 * @property {boolean} hasDcEvent Connect, Disconnect
 * @property {boolean} hasDcError Timeout, Incorrect, Unhandling, ...
 * @property {boolean} hasDcMessage ExecutionTerminate, OneAndOne, Delete Success
 * @property {boolean} hasTransferCommand 요청 Data
 * @property {boolean} hasCommanderResponse 데이터에 대한 Commander의 요청
 * @property {boolean} hasReceiveData 수신 Data
 */

/**
 * @typedef {Object} connect_info Device Client Controller 라이브러리 생성자에게 넘겨줄 생성 정보
 * @property {boolean=} hasPassive 수동 Client 여부. 기본 값 false
 * @property {string} type 'socket', 'serial', 'zigbee', ...
 * @property {string=} subType 'parser', 'xbee', ....
 * @property {number=} baudRate
 * @property {string=} host 접속 경로(socket 일 경우 사용)
 * @property {number|string=} port 접속 포트
 * @property {number=} retryChance 명령 재시도 횟수(default: 0)
 * @property {parserInfo=} addConfigInfo type, subType의 Contoller에서 요구하는 추가 접속 정보
 */

/**
 * @typedef {Object} protocol_info Device Protocol Converter 라이브러리 생성자에게 넘겨줄 생성 정보
 * @property {string} mainCategory 장치 종류.
 * @property {string} subCategory 장치 내 세부 프로토콜
 * @property {string} wrapperCategory 명령 요청에 추가적인 frame을 씌울 Wrapping 프로토콜
 * @property {string|number|Buffer} deviceId 장치 일련번호(S/N)
 * @property {number=} cmdExecTimeoutMs 해당 전송 후 명령 완료 처리될때까지 대기 시간 (ms)
 * @property {number=} delayExecTimeoutMs 해당 명령을 수행하기 전 timeout 대기 시간(ms)
 * @property {protocolOptionInfo=} protocolOptionInfo 프로토콜 변환 과정에서 생기는 이벤트에 대해서 처리할 옵션 정보
 * @property {Object=} option
 */

/**
 * @typedef {Object} protocolOptionInfo 프로토콜 변환 과정에서 생기는 이벤트에 대해서 처리할 옵션 정보
 * @property {boolean} hasTrackingData  전송 데이터가 같으나 파싱이 실패할 경우 데이터 누적을 할지 여부 (Default: false)
 */

module;
