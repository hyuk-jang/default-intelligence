/**
 * @typedef {Object} CALENDAR '실험 달력'
 * @property {string} comment 0: 정상, 1: 시스템 오류, 2: 비
 * @property {number} is_error 에러 여부
 * @property {number} calendar_seq 실험 달력 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {Date} writedate 작성일
 */

/**
 * @typedef {Object} CONNECTOR '접속반 상세 정보'
 * @property {number} connector_seq 접속반 정보 시퀀스
 * @property {string} target_id 접속반 id
 * @property {string} target_category 접속반 종류
 * @property {string} target_name 인버터 명
 * @property {string} connect_type 연결 종류
 * @property {Buffer} dialing connector 접속 국번(1byte): Modbus RTU 기준
 * @property {string} code 고유 코드
 * @property {string} host host
 * @property {string} port port
 * @property {number} baud_rate baud_rate
 * @property {string} director_name 담당자
 * @property {string} director_tel 연락처
 */

/**
 * @typedef {Object} CONNECTOR_TROUBLE_DATA '장치에서 에러가 검출될 경우 발생 및 해결 정보 저장'
 * @property {number} connector_trouble_data_seq 접속반 문제 이력 시퀀스
 * @property {number} connector_seq 접속반 정보 시퀀스
 * @property {number} is_error 고장 여부
 * @property {string} msg 고장 내용
 * @property {string} code 고장 코드
 * @property {Date} occur_date 발생 일자
 * @property {Date} fix_date 해결 일자
 */

/**
 * @typedef {Object} DV_DATA_LOGGER '데이타 로거'
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {number} data_logger_def_seq 데이터 로거 개요 시퀀스
 * @property {string} serial_number Data Logger에 접속할 수 있는 ID
 * @property {string} target_code 데이타 로거 식별 번호
 * @property {string} connect_info 장치 접속 정보
 * @property {string} protocol_info 장치 프로토콜 정보
 */

/**
 * @typedef {Object} DV_DATA_LOGGER_DEF '데이터 로거 개요'
 * @property {number} data_logger_def_seq 데이터 로거 개요 시퀀스
 * @property {string} target_prefix 데이터 로거 접두사(D_WD, D_P, ...)
 * @property {string} target_name 데이터 로거를 부를 일반 명칭
 */

/**
 * @typedef {Object} DV_DATA_LOGGER_TROUBLE_DATA '장치에서 에러가 검출될 경우 발생 및 해결 정보 저장'
 * @property {number} data_logger_trouble_data_seq 고장 이력 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {string} trouble_msg 고장 내용
 * @property {string} fix_msg 해결 내용
 * @property {Date} occur_date 발생 일자
 * @property {Date} fix_date 해결 일자
 */

/**
 * @typedef {Object} DV_DEVICE_DATA '동작 상태를 가지고 있는 장치의 데이터를 기'
 * @property {number} device_data_seq 장치 상태 데이터 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {string} str_data Open, Close, On, Off ...
 * @property {Date} writedate 입력일
 */

/**
 * @typedef {Object} DV_NODE '장치 및 센서 정'
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} node_def_seq 노드 개요 정보 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {string} target_code 노드 ID(001, 002, ...)
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {string} serial_number 장치 뒷면에 나와있는 S/N
 */

/**
 * @typedef {Object} DV_NODE_CLASS '지정된 센서 목록으로 온도 센서(Temperature), 풍향 센서(WindSpeed) 등등을 표기한 '
 * @property {number} node_class_seq 노드 대분류 시퀀스
 * @property {string} target_id 노드를 가르키는 고유 명
 * @property {string} target_name 장치 명(한글)
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {string} data_unit cm, kWh, m/s, m 등등
 * @property {string} description 부연 설명이 필요한 경우
 */

/**
 * @typedef {Object} DV_NODE_DEF '노드 개요 정보'
 * @property {number} node_def_seq 노드 개요 정보 시퀀스
 * @property {number} node_class_seq 노드 목록 시퀀스
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사
 * @property {string} target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정
 * @property {string} target_name 필요시 세부 사용 목적 기술
 * @property {string} description 노드 데이터 단위에 대한 부연 설명이 필요한 경우
 */

/**
 * @typedef {Object} DV_PLACE '장소 정보'
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} place_def_seq 장소 개요 정보 시퀀스
 * @property {string} target_code 장소 번호
 * @property {string} place_info 장소 상세 정보
 */

/**
 * @typedef {Object} DV_PLACE_CLASS '장소 대분류'
 * @property {number} place_class_seq 장소 대분류 시퀀스
 * @property {string} target_id 장소 id
 * @property {string} target_name 장소 대분류 명
 * @property {string} description 장소 분류 설명
 */

/**
 * @typedef {Object} DV_PLACE_DEF '장소 개요 정보'
 * @property {number} place_def_seq 장소 개요 정보 시퀀스
 * @property {number} place_class_seq 장소 대분류 시퀀스
 * @property {string} target_id 장소 개요 id
 * @property {string} target_prefix 장소 접두사
 * @property {string} target_name 이름
 */

/**
 * @typedef {Object} DV_PLACE_RELATION '센서 관계'
 * @property {number} place_relation_seq 센서 관계 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} place_seq 장소 정보 시퀀스
 */

/**
 * @typedef {Object} DV_SENSOR_DATA '수치 데이터를 가지고 있는 센서의 데이터를 기록'
 * @property {number} sensor_data_seq 센서 데이터 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} num_data 센서 데이터
 * @property {Date} writedate 입력일
 */

/**
 * @typedef {Object} INVERTER '인버터 장치 상세 정보'
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {string} target_id 인버터 id
 * @property {string} target_name 인버터 명
 * @property {string} target_type 0: 단상, 1: 삼상
 * @property {string} target_category 인버터 회사 프로토콜
 * @property {string} connect_type 연결 종류
 * @property {Buffer} dialing inverter 접속 국번(2byte): HexPower 기준
 * @property {string} host host
 * @property {string} port port
 * @property {number} baud_rate baud_rate
 * @property {string} code 고유 코드
 * @property {number} amount 단위: Wh (10:1 Scale)
 * @property {string} director_name 담당자
 * @property {string} director_tel 연락처
 * @property {string} chart_color 대시 보드 차트 색상
 * @property {number} chart_sort_rank 대시 보드 차트 정렬 순위
 * @property {number} compare_inverter_seq 성능 비교를 위한 인버터
 */

/**
 * @typedef {Object} INVERTER_DATA '인버터에서 측정된 데이터'
 * @property {number} inverter_data_seq 인버터 데이터 시퀀스
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {number} in_a 10:1 Scale
 * @property {number} in_v 10:1 Scale
 * @property {number} in_w 입력 전력
 * @property {number} out_a 10:1 Scale
 * @property {number} out_v 10:1 Scale
 * @property {number} out_w 출력 전력
 * @property {number} p_f Power Factor (10:1 Scale)
 * @property {number} d_wh Daily Power, 단위:Wh (10:1 Scale)
 * @property {number} c_wh Cumulative Power, 단위:Wh (10:1 Scale)
 * @property {Date} writedate 등록일
 */

/**
 * @typedef {Object} INVERTER_TROUBLE_DATA '장치에서 에러가 검출될 경우 발생 및 해결 정보 저장'
 * @property {number} inverter_trouble_data_seq 인버터 문제 이력 시퀀스
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {number} is_error isSystemError
 * @property {string} msg 고장 내용
 * @property {string} code 고장 코드
 * @property {Date} occur_date 발생 일자
 * @property {Date} fix_date 해결 일자
 */

/**
 * @typedef {Object} KMA_DATA '기상청에서 발표한 일기예보를 저장'
 * @property {number} kma_data_seq 기상청 일기 예보 시퀀스
 * @property {number} weather_location_seq 기상청 정보 위치 시퀀스
 * @property {number} temp ℃
 * @property {number} sky ① 1 : 맑음 ② 2 : 구름조금 ③ 3 : 구름많음 ④ 4 : 흐림
 * @property {number} pty (0 : 없음, 1:비, 2:비/눈, 3:눈/비, 4:눈)
 * @property {number} wf ① 맑음 ② 구름 조금 ③ 구름 많음 ④ 흐림 ⑤ 비 ⑥ 눈/비 ⑦ 눈
 * @property {number} pop %
 * @property {number} r12 mm (① 0 <= x < 0.1, ② 0.1 <= x < 1, ③ 1 <= x < 5, ④ 5 <= x < 10, ⑤ 10 <= x < 25, ⑥ 25 <= x < 50, ⑦ 50 <= x)
 * @property {number} ws m/s
 * @property {number} wd 풍향 0~7 (북, 북동, 동, 남동, 남, 남서, 서, 북서)
 * @property {number} reh %
 * @property {Date} applydate 적용시간
 * @property {Date} writedate 작성일
 * @property {Date} updatedate 수정일
 */

/**
 * @typedef {Object} MAIN '설치되고 운용중인 UPSAS 목록 정보 '
 * @property {number} main_seq MAIN 시퀀스
 * @property {number} weather_location_seq 기상청 정보 위치 시퀀스
 * @property {string} uuid uuid
 * @property {string} name UPSAS 이름
 * @property {string} address 주소
 * @property {string} ip 아이피
 * @property {string} push_port 푸시포트
 * @property {string} cmd_port 명령포트
 * @property {string} gcm_senderid GCM_ID
 * @property {number} is_deleted 삭제여부
 * @property {Date} writedate 생성일
 * @property {Date} updatedate 수정일
 */

/**
 * @typedef {Object} MAIN_MAP '염전맵이 저장되어 있는 경로'
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} path 경로
 * @property {string} url URL
 * @property {string} name 파일이름
 * @property {Date} writedate 등록일
 */

/**
 * @typedef {Object} MEMBER '가입한 회원의 정보'
 * @property {number} member_seq 회원정보 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} user_id 아이디
 * @property {string} pw_salt 암호화소금
 * @property {string} pw_hash 암호화비밀번호
 * @property {string} name 이름
 * @property {string} nick_name 별칭
 * @property {string} grade 회원 등급
 * @property {string} address 주소
 * @property {string} tel 전화번호
 * @property {number} is_deleted 삭제여부
 * @property {Date} writedate 생성일
 * @property {Date} updatedate 수정일
 */

/**
 * @typedef {Object} MODULE_DATA '접속반에서 측정된 데이터'
 * @property {number} module_data_seq 접속반 데이터 시퀀스
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {number} amp 10:1 Scale
 * @property {number} vol 10:1 Scale
 * @property {Date} writedate 등록일
 */

/**
 * @typedef {Object} PHOTOVOLTAIC '수중 태양광 모듈 상세 정보'
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {string} target_id 모듈 id
 * @property {string} target_name 모듈 명
 * @property {string} install_place 설치장소
 * @property {string} module_type 모듈 타입
 * @property {number} compose_count 직렬구성 개수
 * @property {number} amount 단위: kW (10:1 Scale)
 * @property {string} manufacturer 제조사
 * @property {string} chart_color 대시 보드 차트 색상
 * @property {number} chart_sort_rank 대시 보드 차트 정렬 순위
 */

/**
 * @typedef {Object} PHOTOVOLTAIC_TROUBLE_DATA '장치에서 에러가 검출될 경우 발생 및 해결 정보 저장'
 * @property {number} photovoltaic_trouble_data_seq 모듈 문제 이력 시퀀스
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {number} is_error 고장 여부
 * @property {string} code 고장 code
 * @property {string} msg 고장 내용
 * @property {Date} occur_date 발생 일자
 * @property {Date} fix_date 해결 일자
 */

/**
 * @typedef {Object} RELATION_POWER '태양광 계측 시스템 관계 정보'
 * @property {number} main_seq MAIN 시퀀스
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {number} connector_seq 접속반 정보 시퀀스
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} connector_ch 접속반 연결 채널
 */

/**
 * @typedef {Object} TEMP_WATER_LEVEL '임시 수위 테이블'
 * @property {number} temp_water_level_seq 임시 수위 테이블 시퀀스
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {number} water_level 수위
 * @property {Date} applydate 적용시간
 */

/**
 * @typedef {Object} WEATHER_DEVICE_DATA '기상관측장비로부터 수집한 데이터를 저장'
 * @property {number} weather_device_data_seq 기상관측장비 측정 정보 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {number} sm_infrared 0: 맑음, 1: 이슬비, 2: 약한비, 3: 보통비, 4: 폭우
 * @property {number} temp ℃
 * @property {number} reh %
 * @property {number} wd 0~7 (북, 북동, 동, 남동, 남, 남서, 서, 북서)
 * @property {number} ws m/s
 * @property {number} rain_h mm
 * @property {number} rain_d mm
 * @property {number} solar W/mﾲ
 * @property {number} inclined_solar 경사 일사량
 * @property {number} uv 자외선
 * @property {Date} writedate 등록일
 */

/**
 * @typedef {Object} WEATHER_LOCATION '기상청의 날씨 API를 가져올 위치값 테이블'
 * @property {number} weather_location_seq 기상청 정보 위치 시퀀스
 * @property {string} province 도
 * @property {string} city 시
 * @property {string} town 읍
 * @property {number} latitude 위도
 * @property {number} longitude 경도
 * @property {number} x X
 * @property {number} y Y
 */

/**
 * @typedef {Object} V_DV_DATA_LOGGER
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {number} data_logger_def_seq 데이터 로거 개요 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} dl_real_id _id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_id VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_name ` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} m_name UPSAS 이름' COLLATE 'utf8_general_ci
 * @property {string} dl_target_code 데이타 로거 식별 번호' COLLATE 'utf8_general_ci
 * @property {string} dld_target_name 데이터 로거를 부를 일반 명칭' COLLATE 'utf8_general_ci
 * @property {string} dld_target_prefix 데이터 로거 접두사(D_WD, D_P, ...)' COLLATE 'utf8_general_ci
 * @property {string} serial_number Data Logger에 접속할 수 있는 ID' COLLATE 'utf8_general_ci
 * @property {string} connect_info 장치 접속 정보' COLLATE 'utf8_general_ci
 * @property {string} protocol_info 장치 프로토콜 정보' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_DEVICE_DATA
 * @property {number} device_data_seq 장치 상태 데이터 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {string} str_data Open, Close, On, Off ...' COLLATE 'utf8_general_ci
 * @property {string} data_unit cm, kWh, m/s, m 등등' COLLATE 'utf8_general_ci
 * @property {Date} writedate 입력일
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_real_id _id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_id VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_name ` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_NODE
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} node_def_seq 노드 개요 정보 시퀀스
 * @property {number} node_class_seq 노드 대분류 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_real_id _id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_id VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_name ` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} data_unit cm, kWh, m/s, m 등등' COLLATE 'utf8_general_ci
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {string} n_target_code 노드 ID(001, 002, ...)' COLLATE 'utf8_general_ci
 * @property {string} nd_target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정' COLLATE 'utf8_general_ci
 * @property {string} nd_target_name 필요시 세부 사용 목적 기술' COLLATE 'utf8_general_ci
 * @property {string} nd_target_prefix 해당 프로젝트에서 쓸 접두사' COLLATE 'utf8_general_ci
 * @property {string} nd_description 노드 데이터 단위에 대한 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 * @property {string} nc_target_id 노드를 가르키는 고유 명' COLLATE 'utf8_general_ci
 * @property {string} nc_target_name 장치 명(한글)' COLLATE 'utf8_general_ci
 * @property {string} nc_description 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_NODE_STATUS
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} node_def_seq 노드 개요 정보 시퀀스
 * @property {number} node_class_seq 노드 대분류 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} node_data ta` VARCHAR(30) NULL COLLATE 'utf8_general_ci
 * @property {Date} writedate
 * @property {string} data_unit cm, kWh, m/s, m 등등' COLLATE 'utf8_general_ci
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {string} n_target_code 노드 ID(001, 002, ...)' COLLATE 'utf8_general_ci
 * @property {string} nc_target_id 노드를 가르키는 고유 명' COLLATE 'utf8_general_ci
 * @property {string} nc_target_name 장치 명(한글)' COLLATE 'utf8_general_ci
 * @property {string} nc_description 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 * @property {string} nd_target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정' COLLATE 'utf8_general_ci
 * @property {string} nd_target_name 필요시 세부 사용 목적 기술' COLLATE 'utf8_general_ci
 * @property {string} nd_target_prefix 해당 프로젝트에서 쓸 접두사' COLLATE 'utf8_general_ci
 * @property {string} nd_description 노드 데이터 단위에 대한 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_PLACE
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} place_def_seq 장소 개요 정보 시퀀스
 * @property {number} place_class_seq 장소 대분류 시퀀스
 * @property {string} place_id d` VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} place_name ame` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {number} depth 상대 고도 인덱스
 * @property {string} place_info 장소 상세 정보' COLLATE 'utf8_general_ci
 * @property {string} p_target_code 장소 번호' COLLATE 'utf8_general_ci
 * @property {string} pd_target_prefix 장소 접두사' COLLATE 'utf8_general_ci
 * @property {string} pd_target_id 장소 개요 id' COLLATE 'utf8_general_ci
 * @property {string} pd_target_name 이름' COLLATE 'utf8_general_ci
 * @property {string} pc_target_id 장소 id' COLLATE 'utf8_general_ci
 * @property {string} pc_target_name 장소 대분류 명' COLLATE 'utf8_general_ci
 * @property {string} pc_description 장소 분류 설명' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_PLACE_RELATION
 * @property {number} place_relation_seq 센서 관계 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_id VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_name ` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} place_id d` VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} place_name ame` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} pd_target_name 이름' COLLATE 'utf8_general_ci
 * @property {string} nc_target_name 장치 명(한글)' COLLATE 'utf8_general_ci
 * @property {string} nd_target_name 필요시 세부 사용 목적 기술' COLLATE 'utf8_general_ci
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {string} nd_target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정' COLLATE 'utf8_general_ci
 * @property {string} nc_target_id 노드를 가르키는 고유 명' COLLATE 'utf8_general_ci
 * @property {string} serial_number Data Logger에 접속할 수 있는 ID' COLLATE 'utf8_general_ci
 * @property {number} main_seq MAIN 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 */

/**
 * @typedef {Object} V_DV_SENSOR_DATA
 * @property {number} sensor_data_seq 센서 데이터 시퀀스
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} num_data 센서 데이터
 * @property {string} data_unit cm, kWh, m/s, m 등등' COLLATE 'utf8_general_ci
 * @property {Date} writedate 입력일
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_real_id _id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_id VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} dl_name ` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_DV_SENSOR_PROFILE
 * @property {number} node_seq 노드 정보 시퀀스
 * @property {number} node_def_seq 노드 개요 정보 시퀀스
 * @property {number} node_class_seq 노드 대분류 시퀀스
 * @property {number} data_logger_seq 데이타 로거 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} node_id ` VARCHAR(26) NOT NULL COLLATE 'utf8_general_ci
 * @property {string} node_real_id al_id` VARCHAR(36) NULL COLLATE 'utf8_general_ci
 * @property {string} node_name me` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {number} node_data 센서 데이터
 * @property {Date} writedate 입력일
 * @property {string} data_unit cm, kWh, m/s, m 등등' COLLATE 'utf8_general_ci
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {string} n_target_code 노드 ID(001, 002, ...)' COLLATE 'utf8_general_ci
 * @property {string} nc_target_id 노드를 가르키는 고유 명' COLLATE 'utf8_general_ci
 * @property {string} nc_target_name 장치 명(한글)' COLLATE 'utf8_general_ci
 * @property {string} nc_description 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 * @property {string} nd_target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정' COLLATE 'utf8_general_ci
 * @property {string} nd_target_name 필요시 세부 사용 목적 기술' COLLATE 'utf8_general_ci
 * @property {string} nd_target_prefix 해당 프로젝트에서 쓸 접두사' COLLATE 'utf8_general_ci
 * @property {string} nd_description 노드 데이터 단위에 대한 부연 설명이 필요한 경우' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_INVERTER_STATUS
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {string} target_id 인버터 id' COLLATE 'utf8_general_ci
 * @property {string} target_name 인버터 명' COLLATE 'utf8_general_ci
 * @property {string} target_type 0: 단상, 1: 삼상' COLLATE 'utf8_general_ci
 * @property {string} target_category 인버터 회사 프로토콜' COLLATE 'utf8_general_ci
 * @property {string} connect_type 연결 종류' COLLATE 'utf8_general_ci
 * @property {Buffer} dialing inverter 접속 국번(2byte): HexPower 기준
 * @property {string} host host' COLLATE 'utf8_general_ci
 * @property {string} port port' COLLATE 'utf8_general_ci
 * @property {number} baud_rate baud_rate
 * @property {string} code 고유 코드' COLLATE 'utf8_general_ci
 * @property {number} amount 단위: Wh (10:1 Scale)
 * @property {string} director_name 담당자' COLLATE 'utf8_general_ci
 * @property {string} director_tel 연락처' COLLATE 'utf8_general_ci
 * @property {string} chart_color 대시 보드 차트 색상' COLLATE 'utf8_general_ci
 * @property {number} chart_sort_rank 대시 보드 차트 정렬 순위
 * @property {number} compare_inverter_seq 성능 비교를 위한 인버터
 * @property {number} inverter_data_seq 인버터 데이터 시퀀스
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} in_a
 * @property {number} in_v
 * @property {number} in_w
 * @property {number} out_a
 * @property {number} out_v
 * @property {number} out_w
 * @property {number} p_f
 * @property {number} d_wh
 * @property {number} c_wh
 * @property {number} daily_power_wh
 * @property {Date} writedate 등록일
 * @property {number} pv_amount 단위: kW (10:1 Scale)
 * @property {string} install_place 설치장소' COLLATE 'utf8_general_ci
 */

/**
 * @typedef {Object} V_MODULE_STATUS
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {string} target_id 모듈 id' COLLATE 'utf8_general_ci
 * @property {string} target_name 모듈 명' COLLATE 'utf8_general_ci
 * @property {string} install_place 설치장소' COLLATE 'utf8_general_ci
 * @property {string} module_type 모듈 타입' COLLATE 'utf8_general_ci
 * @property {number} compose_count 직렬구성 개수
 * @property {number} amount 단위: kW (10:1 Scale)
 * @property {string} manufacturer 제조사' COLLATE 'utf8_general_ci
 * @property {string} chart_color 대시 보드 차트 색상' COLLATE 'utf8_general_ci
 * @property {number} chart_sort_rank 대시 보드 차트 정렬 순위
 * @property {number} connector_ch 접속반 연결 채널
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {number} amp
 * @property {number} vol
 * @property {Date} writedate 등록일
 */

/**
 * @typedef {Object} V_UPSAS_PROFILE
 * @property {number} connector_ch 접속반 연결 채널
 * @property {number} photovoltaic_seq 모듈 세부 정보 시퀀스
 * @property {string} pv_target_id 모듈 id' COLLATE 'utf8_general_ci
 * @property {string} pv_target_name 모듈 명' COLLATE 'utf8_general_ci
 * @property {string} pv_install_place 설치장소' COLLATE 'utf8_general_ci
 * @property {string} pv_module_type 모듈 타입' COLLATE 'utf8_general_ci
 * @property {number} pv_compose_count 직렬구성 개수
 * @property {number} pv_amount 단위: kW (10:1 Scale)
 * @property {string} pv_manufacturer 제조사' COLLATE 'utf8_general_ci
 * @property {string} pv_chart_color 대시 보드 차트 색상' COLLATE 'utf8_general_ci
 * @property {number} pv_chart_sort_rank 대시 보드 차트 정렬 순위
 * @property {number} connector_seq 접속반 정보 시퀀스
 * @property {string} cnt_target_id 접속반 id' COLLATE 'utf8_general_ci
 * @property {string} cnt_target_category 접속반 종류' COLLATE 'utf8_general_ci
 * @property {string} cnt_target_name 인버터 명' COLLATE 'utf8_general_ci
 * @property {Buffer} cnt_dialing connector 접속 국번(1byte): Modbus RTU 기준
 * @property {string} cnt_code 고유 코드' COLLATE 'utf8_general_ci
 * @property {string} cnt_host host' COLLATE 'utf8_general_ci
 * @property {string} cnt_port port' COLLATE 'utf8_general_ci
 * @property {number} cnt_baud_rate baud_rate
 * @property {string} cnt_director_name 담당자' COLLATE 'utf8_general_ci
 * @property {string} cnt_director_tel 연락처' COLLATE 'utf8_general_ci
 * @property {number} inverter_seq 인버터 정보 시퀀스
 * @property {string} ivt_target_id 인버터 id' COLLATE 'utf8_general_ci
 * @property {string} ivt_target_name 인버터 명' COLLATE 'utf8_general_ci
 * @property {string} ivt_target_type 0: 단상, 1: 삼상' COLLATE 'utf8_general_ci
 * @property {string} ivt_target_category 인버터 회사 프로토콜' COLLATE 'utf8_general_ci
 * @property {string} ivt_connect_type 연결 종류' COLLATE 'utf8_general_ci
 * @property {Buffer} ivt_dialing inverter 접속 국번(2byte): HexPower 기준
 * @property {string} ivt_host host' COLLATE 'utf8_general_ci
 * @property {string} ivt_port port' COLLATE 'utf8_general_ci
 * @property {number} ivt_baud_rate baud_rate
 * @property {string} ivt_code 고유 코드' COLLATE 'utf8_general_ci
 * @property {number} ivt_amount 단위: Wh (10:1 Scale)
 * @property {string} ivt_director_name 담당자' COLLATE 'utf8_general_ci
 * @property {string} ivt_director_tel 연락처' COLLATE 'utf8_general_ci
 * @property {number} place_seq 장소 정보 시퀀스
 * @property {string} place_id d` VARCHAR(26) NULL COLLATE 'utf8_general_ci
 * @property {string} place_name ame` VARCHAR(61) NULL COLLATE 'utf8_general_ci
 * @property {number} ch_number
 */

/**
 * @typedef {Object} V_MEMBER
 * @property {number} member_seq 회원정보 시퀀스
 * @property {number} main_seq MAIN 시퀀스
 * @property {string} user_id 아이디' COLLATE 'utf8_general_ci
 * @property {string} pw_salt 암호화소금' COLLATE 'utf8_general_ci
 * @property {string} pw_hash 암호화비밀번호' COLLATE 'utf8_general_ci
 * @property {string} name 이름' COLLATE 'utf8_general_ci
 * @property {string} nick_name 별칭' COLLATE 'utf8_general_ci
 * @property {string} grade 회원 등급' COLLATE 'utf8_general_ci
 * @property {string} address 주소' COLLATE 'utf8_general_ci
 * @property {string} tel 전화번호' COLLATE 'utf8_general_ci
 * @property {number} is_deleted 삭제여부
 * @property {Date} writedate 생성일
 * @property {Date} updatedate 수정일
 * @property {number} weather_location_seq 기상청 정보 위치 시퀀스
 * @property {string} main_uuid uuid' COLLATE 'utf8_general_ci
 * @property {string} main_name UPSAS 이름' COLLATE 'utf8_general_ci
 * @property {string} main_address 주소' COLLATE 'utf8_general_ci
 * @property {number} main_is_deleted 삭제여부
 * @property {string} province 도' COLLATE 'utf8_general_ci
 * @property {string} city 시' COLLATE 'utf8_general_ci
 * @property {string} town 읍' COLLATE 'utf8_general_ci
 * @property {number} latitude 위도
 * @property {number} longitude 경도
 * @property {number} x X
 * @property {number} y Y
 */

module;
