/**
 * @desc 자식들은 m접두어를 붙임
 * @typedef {Object} mDeviceMap
 * @property {mDrawInfo} drawInfo
 * @property {mSetInfo} setInfo
 * @property {mRealtionInfo} realtionInfo
 * @property {mControlInfo} controlInfo
 */

/******************** drawInfo 시작  **********************/

/**
 * @typedef {Object} mDrawInfo
 * @property {mFrame} frame
 * @property {mPosition} positionList
 */

/**
 * @typedef {Object} mFrame
 * @property {{width: number, height: number}} mapSize
 * @property {Array.<mSvgModelResource>} svgModelResourceList
 */

/**
 * @typedef {Object} mSvgModelResource
 * @property {string} id
 * @property {string} type 'rect', 'line', 'circle', 'rhombus'
 * @property {mElementDrawInfo} elementDrawInfo
 * @example
 * type: rect --> width, height, radius, color
 * type: circle --> radius, color
 * type: ellipse --> width, height, color
 * type: rhombus --> width, height, radius, rotate:45, color
 */

/**
 * @typedef {Object} mElementDrawInfo
 * @property {number=} width
 * @property {number=} height
 * @property {number=} radius
 * @property {number=} rotate
 * @property {number=} strokeWidth
 * @property {string} color
 */

/******************** drawInfo 끝  **********************/

/******************** setInfo 시작  **********************/

/**
 * @typedef {Object} mSetInfo Node, DataLogger, ConnectInfo 설정
 * @property {MAIN} mainInfo 메인 정보. 입력한 정보를 기반으로 MAIN table 조회 후 main_seq 취득
 * @property {mDccConstructorInfo[]} dccConstructorList DCC 객체 생성 정보 정의 목록
 * @property {mDpcConstructorInfo[]} dpcConstructorList DPC 객체 생성 정보 정의 목록
 * @property {mDataLoggerStructureInfo[]} dataLoggerStructureList 데이터 로거 구조 목록
 * @property {mNodeStructureInfo[]} nodeStructureList 노드 구조 목록
 */

/**
 * @typedef {Object} mDccConstructorInfo 데이터 로거 연결 정보
 * @property {string} dccId ID
 * @property {connect_info} connect_info Device Client Controller 라이브러리 생성자에게 넘겨줄 생성 정보
 * @desc 향후 connect_info LONGTEXT 형식으로 DB에 삽입
 */

/**
 * @typedef {Object} mDpcConstructorInfo DPC를 생성하기 위한 정보
 * @property {string} dpcId ID
 * @property {protocol_info} protocol_info deviceId를 제외하고 입력. Device Protocol Converter 라이브러리 생성자에게 넘겨줄 생성 정보
 * @desc 향후 protocol_info LONGTEXT 형식으로 DB에 삽입
 */

/**
 * @desc DV_DATA_LOGGER_DEF 참조
 * @typedef {Object} mDataLoggerStructureInfo 데이터 로거 대분류 구조
 * @property {string} target_prefix 접두어
 * @property {string} target_name 데이터 로거 별칭
 * @property {mDataLoggerDeviceInfo[]} dataLoggerDeviceList
 */

/**
 * @desc DV_DATA_LOGGER 참조
 * @typedef {Object} mDataLoggerDeviceInfo 데이터 로거 상세 전보
 * @property {string} serial_number 장치 SN (고유 식별 번호)
 * @property {string} target_code 장치 넘버링(001, 002, 003, ...)
 * @property {string} dccId dccConstructorInfo dccId
 * @property {string} dpcId dpcConstructorInfo dpcId
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 */

/**
 * @desc DV_NODE_CLASS 참조
 * @typedef {Object} mNodeStructureInfo 노드 대분류 구조
 * @property {string} target_id 노드를 가르키는 고유 명(temp, reh, solar, co2, ...)
 * @property {string} target_name target_id에 대응하는 이름(온도, 습도, 일사량, 이산화탄소, ...)
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor)
 * @property {string} data_unit 데이터 단위(℃, %, W/m², ppl, ...)
 * @property {string} description 부연 설명이 필요한 경우
 * @property {mNodeDefInfo[]} defList 노드 개요 정보 목록
 */

/**
 * @desc DV_NODE_DEF 참조
 * @typedef {Object} mNodeDefInfo 노드 개요 정보
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사
 * @property {string} target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정
 * @property {string} target_name 필요시 세부 사용 목적 기술
 * @property {string} description 노드 데이터 단위에 대한 부연 설명이 필요한 경우
 * @property {mNodeModelInfo[]} nodeList 노드 상세 목록
 */

/**
 * @desc DV_NODE 참조
 * @typedef {Object} mNodeModelInfo 노드 모델 상세 정보
 * @property {string} target_code 노드 넘버링(001, 002, ...)
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 */

/******************** setInfo 끝  **********************/

/******************** relationInfo 시작  **********************/

/**
 * @typedef {Object} mRealtionInfo 관계 정보
 * @property {mPlaceStructureInfo[]} placeRelationList 장소 관계 정보
 * @property {mBrineFlowRelationInfo[]} brineFlowRelationList 염수 이동 관계
 * @property {mBrineFeedRankRelationInfo[]} brineFeedRankRelationList 염수 급수 우선 관계
 */

/**
 * @desc DV_PLACE_CLASS 참조
 * @typedef {Object} mPlaceStructureInfo 장소 대분류 구조
 * @property {string} target_id 장소를 가르키는 고유 명(salternBlock, brineWarehouse, ...)
 * @property {string} target_name target_id에 대응하는 이름(염판, 해주, ...)
 * @property {string} description 부연 설명이 필요한 경우
 * @property {mPlaceDefInfo[]} defList
 */

/**
 * @desc DV_PLACE_DEF 참조
 * @typedef {Object} mPlaceDefInfo 장소 개요 정보
 * @property {string} target_id 장소 성격에 따라 달리 부를 ID(salternEvaporationBlock, salternCrystalizingBlock, ...)
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사 (SEB, SCB, ...)
 * @property {string} target_name 데이터 로거 별칭 (증발지, 결정지, ...)
 * @property {mPlaceModelInfo[]} placeList 장소 상세 목록
 */

/**
 * @desc DV_PLACE 참조
 * @desc 향후 place_info는 LONGTEXT 형식으로 DB에 삽입
 * @typedef {Object} mPlaceModelInfo 장소 개요 정보
 * @property {string} target_code 장소 넘버링 (001, 002, ...)
 * @property {number=} depth 장소 위치 가중치(가중치가 높을 수록 높은 고도)
 * @property {mPlaceInfo=} place_info 장소 상세 정보. 프로젝트 별 해당 장소에 특정 정보를 담고 싶다면 JSON 형식으로 입력
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 */

/**
 * FIXME: 프로젝트 별로 수정
 * @typedef {Object} mPlaceInfo 장소 상세 특화 정보
 * @property {number=} minBrineLevel 최저 인식 수위(cm). 기본적으로 최저 수위에 도달하면 급수를 진행.
 * @property {number=} maxBrineLevel 최대 인식 수위(cm) 해당 장소에서 수용할 수 있는 최대 치 값. 해당 값을 초과하면 진행 중인 급수를 강제로 취소. 추가적인 급수 진행 불가.
 * @property {number=} setBrineLevel 설정 수위(cm). 적정 수위를 유지하기 위한 임계치 값. 해당 값 미만으로 떨어지면 적정 수치로 급수 진행
 * @property {number=} setSalinity 설정된 염도(%). 값이 도달하면 지정된 장소로 연결된 장소로 배수 진행
 */

/**
 * @typedef {Object} mBrineFlowRelationInfo 염수 이동 관계 정보
 * @property {string} currNodeId 현재 장치 ID (nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록)
 * @property {string[]} parentNodeIdList 염수를 공급할 수 있는 상위 장치(nodeId) 목록
 * @property {string[]} childrenNodeIdList 염수를 공급할 수 있는 하위 장치(nodeId) 목록
 * @property {string[]} placeIdList 현재 장치를 작동시킴으로써 급수를 진행 할 수 있는 장소(placeId) 목록
 */

/**
 * @typedef {Object} mBrineFeedRankRelationInfo 급수 우선 순위 정보
 * @property {string} placeId 현재 급수를 진행할려는 장소 ID
 * @property {string[]} placeIdRankList 우선순위에 따른 장소 ID 목록. index가 낮을 수록 우선권을 가짐
 */

/******************** relationInfo 끝  **********************/

/******************** controlInfo 시작  **********************/

/**
 * @typedef {Object} mControlInfo 명령 정보
 * @property {mTempControlInfo[]} tempControlList 임시 명령 정보
 */

/**
 * @typedef {Object} mTempControlInfo 임시 명령 정보
 * @property {string} cmdName 명령 ID
 * @property {string[]} trueList 장치 Open, On nodeId 목록
 * @property {string[]} falseList 장치 Close, Off nodeId 목록
 */

/******************** controlInfo 끝  **********************/

module;
