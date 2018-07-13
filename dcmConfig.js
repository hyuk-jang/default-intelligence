/**
 * @typedef {Object} sensorDataLoggerConfig 센서 장치를 가져올 컨트롤러 생성 정보
 * @property {boolean} hasDev 
 * @property {deviceInfo} deviceInfo 
 * @property {dataLoggerInfo} dataLoggerInfo 
 * @property {Array.<sensorInfo>} sensorList
 */

/**
 * @typedef {Object} sensorInfo 센서 정보
 * @property {number} sensor_seq sensor ID (Sequence)
 * @property {string} sensor_real_id DB상에서 고유한 Sensor ID
 * @property {string} sensor_id Main 당 일반적으로 부를 Sensor ID
 * @property {string} target_code Sensor Numbering 번호 (001, 002, ...)
 * @property {number} data_logger_index Data Logger에서 수집한 데이터 군 중에서 해당 센서 데이터가 위치하는 인덱스
 * @property {string} sd_target_id Sensor 실제 데이터 Key
 * @property {string} sc_target_id Sensor Unique Key 로 사용되는 ID
 * @property {string} sc_data_unit 표기 단위(℃, %, m/s, ppm, ...)
 * @property {number} sensorData 센서 데이터
 */

/**
 * @typedef {Object} dataLoggerInfo
 * @property {string} sdl_real_id DB상에서 고유한 Logger ID
 * @property {string} sdl_id Main당 일반적으로 부를 Logger ID
 * @property {string} target_alias 장치 이름
 * @property {connect_info} connect_info
 * @property {protocol_info} protocol_info
 * @property {string} serial_number Data Logger 고유 코드(protocol_info 에 보통 국번으로 들어감)
 */

/**
 * @typedef {Object} defaultManagerConfig
 * @property {dbInfo} dbInfo
 * @property {Array.<defaultControlConfig>} deviceControllerList
 */

/**
 * @typedef {Object} defaultSensorConfig 센서 장치를 가져올 컨트롤러 생성 정보
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
