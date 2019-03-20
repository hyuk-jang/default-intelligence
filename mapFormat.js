/**
 * @desc 자식들은 m접두어를 붙임
 * @typedef {Object} mDeviceMap
 * @property {mDrawInfo} drawInfo
 * @property {mSetInfo} setInfo
 * @property {mRelationInfo} relationInfo
 * @property {mControlInfo} controlInfo
 */

/******************** drawInfo 시작  **********************/

/**
 * @typedef {Object} mDrawInfo
 * @property {mFrame} frame
 * @property {mPosition} positionInfo 

/**
 * @typedef {Object} mFrame
 * @property {mMapInfo} mapInfo 전체 svgCanvas의 크기
 * @property {mSvgModelResource[]} svgModelResourceList svg를 그리기위한 필요 요소 목록
 */

/**
 * @typedef {Object} mMapInfo
 * @property {number} width 전체 맵의 가로 길이
 * @property {number} height 전체 맵의 세로 길이
 * @property {mBackgroundInfo=} backgroundInfo 배경정보
 */

/**
 * @typedef {Object} mBackgroundInfo
 * @property {string} backgroundData 배경 경로 or base64 데이터
 * @property {number[]} backgroundPosition 배경의 위치
 */

/**
 * @typedef {Object} mSvgModelResource
 * @property {string} id ID
 * @property {string} type 'rect', 'line', 'circle', 'polygon', 'pattern', 'image' ...
 * @property {mElementDrawInfo} elementDrawInfo
 * @example
 * type: rect, pattern --> width, height, color, opacity
 * type: circle --> radius, color
 * type: polygon --> (x1,y1 x2,y2 x3,y3, x4,y4)
 * type: line --> (x1,y1 x2,y2)
 * type: image --> width, height, imgUrl
 */

/**
 * @typedef {Object} mElementDrawInfo
 * @property {number=} width 가로
 * @property {number=} height 세로
 * @property {number=} radius 반지름, 모서리
 * @property {number=} opacity 투명도 0: 투명
 * @property {string=} imgUrl 이미지 경로
 * @property {string | string[]} color 단일색 or [기존, 이벤트 효과, 에러]
 */

/**
 * @typedef {Object} mPosition
 * @property {mSvgPlaceInfo[]} svgPlaceList 장소 위치 정보와 resource 정보를 포함한 목록
 * @property {mSvgNodeInfo[]} svgNodeList 노드(or 센서) 위치 정보와 resource 정보를 포함한 목록
 */

/**
 * @typedef {Object} mSvgPlaceInfo 장소 대분류와 위치정보 목록
 * @property {string} placeId 장소 대분류 ID
 * @property {defInfo[]} defList resource 정보와 위치 정보
 */

/**
 * @typedef {Object} mSvgNodeInfo 노드(or센서) 대분류와 위치정보 목록
 * @property {string} nodeDefId 노드(or센서) 대분류 ID
 * @property {number} is_sensor 0: 장치, 1: 센서, -1: 미분류
 * @property {defInfo[]} defList resource 정보와 위치 정보
 */

/**
 * @typedef {Object} defInfo
 * @property {string} id 접두어 + 넘버링
 * @property {string} name 한글 명칭
 * @property {string=} placeId 노드(or센서)일 경우 위치한 장소의 ID
 * @property {string} resourceId 그리기 정보를 찾을 resourceId
 * @property {number[]} point 위치
 */

/******************** drawInfo 끝  **********************/

/******************** setInfo 시작  **********************/

/**
 * @typedef {Object} mSetInfo Node, DataLogger, ConnectInfo 설정
 * @property {MAIN} mainInfo 메인 정보. 입력한 정보를 기반으로 MAIN table 조회 후 main_seq 취득
 * @property {mDccConstructorInfo[]} dccConstructorList DCC 객체 생성 정보 정의 목록
 * @property {mDpcConstructorInfo[]} dpcConstructorList DPC 객체 생성 정보 정의 목록
 * @property {mRepeatInfo[]} repeatNodeList DPC 객체 생성 정보 정의 목록
 * @property {mDataLoggerStructureInfo[]} dataLoggerStructureList 데이터 로거 구조 목록
 * @property {mNodeStructureInfo[]} nodeStructureList 노드 구조 목록
 */

/**
 * @typedef {Object} mDccConstructorInfo 데이터 로거 연결 정보
 * @property {string} dccId ID
 * @property {string=} dccName DCC 명
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
 * @typedef {Object} mRepeatInfo DPC를 생성하기 위한 정보
 * @property {string} repeatId ID
 * @property {string} repeatCategory node or prefix, node: nodeStructureList 에서만 사용
 * @property {mNodeModelInfo[]|string[]} nodeList
 * @example
 * repeatCategory: node -> nodeList 덮어쓰기
 * repeatCategory: prefix -> nodeList + '_' + target_code 생성 후 덮어쓰기
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
 * @property {string} target_name 데이터 로거 상세 별칭
 * @property {string} dccId dccConstructorInfo dccId
 * @property {string} dpcId DPC 객체 생성 정보 ID
 * @property {boolean=} isAddSerialNumberToDCC connect_info 를 생성 할 때 serial_number 를 결합하여 생성할지 여부. default false
 * @property {string=} repeatId repeat 저장소에서 가져다 쓸 nodeList. map 재정의시 repeat key 내용으로 nodeList를 덮어씀
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 */

/**
 * @desc DV_NODE_CLASS 참조
 * @typedef {Object} mNodeStructureInfo 노드 대분류 구조
 * @property {string} target_id 노드를 가르키는 고유 명(temp, reh, solar, co2, ...)
 * @property {string} target_name target_id에 대응하는 이름(온도, 습도, 일사량, 이산화탄소, ...)
 * @property {number} is_sensor 센서 여부(0: Device, 1: Sensor). DBW 에서 센서 종류를 판단하기 위해서 사용
 * @property {number=} save_db_type 0: Device, 1: Sensor, 2: Block, 3: Trouble. 지정하지 않을 경우 is_sensor를 따라감. DB에 저장할 때 카테고리를 판별하기 위함
 * @property {string=} data_unit 데이터 단위(℃, %, W/m², ppl, ...)
 * @property {string=} description 부연 설명이 필요한 경우
 * @property {mNodeDefInfo[]} defList 노드 개요 정보 목록
 */

/**
 * @desc DV_NODE_DEF 참조
 * @typedef {Object} mNodeDefInfo 노드 개요 정보
 * @property {string} target_prefix 해당 프로젝트에서 쓸 접두사
 * @property {string} target_id 사용 목적에 따라 달리 부를 센서 명으로 데이터 Key를 결정
 * @property {string} target_name 필요시 세부 사용 목적 기술
 * @property {number} is_avg_center 평균 값(센터) 사용 여부
 * @property {string} description 노드 데이터 단위에 대한 부연 설명이 필요한 경우
 * @property {string=} repeatId repeat 저장소에서 가져다 쓸 nodeList. map 재정의시 repeat key 내용으로 nodeList를 덮어씀
 * @property {mNodeModelInfo[]} nodeList 노드 상세 목록
 */

/**
 * @desc DV_NODE 참조
 * @typedef {Object} mNodeModelInfo 노드 모델 상세 정보
 * @property {string} target_code 노드 넘버링(001, 002, ...)
 * @property {string} target_name 노드 이름
 * @property {number} data_logger_index 해당 센서 데이터의 데이터 로거 인덱스(Default 0)
 * @property {number[]=} axisScale Node 좌표 백분율 정보 [x1, y1] or [x1, y1, x2, y2]
 * @property {number[]=} moveScale Node 별 위치 백분율
 */

/******************** setInfo 끝  **********************/

/******************** relationInfo 시작  **********************/

/**
 * @typedef {Object} mRelationInfo 관계 정보
 * @property {mPlaceStructureInfo[]} placeRelationList 장소 관계 정보
 * @property {mSmartSalternInfo} smartSalternInfo 염전 관계 정보
 * @property {mPipeConnectionRelationInfo[]} pipeConnectionRelationList 염수 이동 관계
 * @property {mBrineFeedRankRelationInfo[]} brineFeedRankRelationList 염수 급수 우선 관계
 * @property {mBrineDrainRankRelationInfo[]} brineDrainRankRelationList 염수 배수 우선 관계
 * @property {mSvgResourceConnectionInfo[]} svgResourceConnectionList 이미지 관계
 * @property {string[]} hiddenTextSvgModelResourceIdList 장소 또는 노드의 텍스트를 숨길 svgModelResouceId
 */

/**
 * target 과 svgModelResource의 이미지 관계
 * @typedef {Object} mSvgResourceConnectionInfo
 * @property {string[]} targetIdList 장소 또는 노드를 가리키는 접두사+number
 * @property {string[]} resourceIdList svgModelResourceInfo의 resourceId
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
 * @property {string=} target_code 장소 넘버링 (001, 002, ...)
 * @property {string=} target_name 장소 상세 명
 * @property {string=} chart_color 차트로 그릴 경우 색상
 * @property {number=} chart_sort_rank 차트 그려질 순위
 * @property {number=} depth 장소 위치 가중치(가중치가 높을 수록 높은 고도)
 * @property {mPlaceInfo=} place_info 장소 상세 정보. 프로젝트 별 해당 장소에 특정 정보를 담고 싶다면 JSON 형식으로 입력
 * @property {string[]} nodeList 데이터 로거가 포함하는 nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록
 */

/**
 * FIXME: 프로젝트 별로 수정
 * @typedef {Object} mPlaceInfo 장소 상세 특화 정보
 * @property {number} maxWL 해당 장소가 가질 수 있는 최대 수위(cm), 해당 값을 초과하면 진행 중인 급수를 강제로 취소. 추가적인 급수 진행 불가.
 * @property {number=} minWL default 0 해당 장소에 염수가 없을 경우 표기되는 최소 수위(cm)
 * @property {string[]} waterSupplyPlaceRankList 급수지 우선 순위 목록
 * @property {string[]} drainagePlaceRankList 배수지 우선 순위 목록
 * @property {ssAutoCycleWaterInfo} autoCycleWaterInfo 자동 염수 순환 정보
 * @property {ssAutoDrainageSalinityInfo} autoDrainageSalinityInfo 염수 도달 시 자동 배수를 시작할 정보
 * @property {{width: number, height: number, depth: number}} placeSize 장소 크기
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} ssAutoCycleWaterInfo 자동 수위 조절
 * @property {number=} setCycleWL 염수 순환 시 세팅할 염수 수위(cm)
 * @property {number} belowCycleWL 해당 수치보다 염수 수위가 낮을 경우 배수가 작동할 수위. minWL 이 존재하지 않을 경우 덧물 기능으로 전환(setWL까지 자동 물 주기)
 * @property {number=} minCycleWL belowWL 배수가 동작할 경우 minWL 수치까지 수위를 뺌
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} ssAutoDrainageSalinityInfo 염도 충족 시 이동할 염수 정보
 * @property {number} aboveSalinity 해당 수치보다 높을 경우 배수가 작동할 염도(%)
 * @property {string[]} desList 급수지 우선 순위
 */

/**
 * @desc Smart Saltern
 * @typedef {Object} mSmartSalternInfo 스마트 염전 설정 정보
 * @property {mPipeConnectionRelationInfo[]} pipeConnectionRelationList 파이프 관계 정보 목록
 */

/**
 * @typedef {Object} mPipeConnectionRelationInfo 파이프 관계 정보
 * @property {string} currNode 현재 장치 ID (nodeModelInfo.nodeId(def_prefix + '_' + target_code) 목록)
 * @property {string[]} parentNodes 염수를 공급할 수 있는 상위 장치(nodeId) 목록
 * @property {string[]} childNodes 염수를 공급할 수 있는 하위 장치(nodeId) 목록
 */

/**
 * @typedef {Object} mBrineFeedRankRelationInfo 급수 우선 순위 정보
 * @property {string} placeId 현재 급수를 진행할려는 장소 ID
 * @property {mFeedCmdInfo[]} feedCmdList 우선순위에 따른 장소 ID 목록. index가 낮을 수록 우선권을 가짐
 */

/**
 * @typedef {Object} mFeedCmdInfo 배수 우선 순위 정보
 * @property {string} srcPlaceId place Destination
 * @property {string} cmdId 수행 명령 ID
 * @property {string} trueList 열려야 하는 장치
 * @property {string} falseList 닫혀야 하는 장치
 */

/**
 * @typedef {Object} mBrineDrainRankRelationInfo 배수 우선 순위 정보
 * @property {string} placeId 현재 배수를 진행할려는 장소 ID
 * @property {mDrainCmdInfo[]} drainCmdList 배수 목적지 리스트. index가 낮을 수록 우선권을 가짐
 */

/**
 * @typedef {Object} mDrainCmdInfo 배수 우선 순위 정보
 * @property {string} destPlaceId place Destination
 * @property {string} cmdId 수행 명령 ID
 * @property {string} trueList 열려야 하는 장치
 * @property {string} falseList 닫혀야 하는 장치
 */

/******************** relationInfo 끝  **********************/

/******************** controlInfo 시작  **********************/

/**
 * @typedef {Object} mControlInfo 명령 정보
 * @property {mSimpleModeInfo[]} simpleModeList 임시 명령 정보
 * @property {mSettingModeInfo[]} settingModeList 임시 명령 정보
 * @property {mTempControlInfo[]} tempControlList 임시 명령 정보
 */

/**
 * @typedef {Object} mSimpleModeInfo 염수 이동 단순 명령
 * @property {string} srcPlaceId 시작 장소 ID
 * @property {Object[]} destList 목적지 장소 목록
 * @property {string} destList.destPlaceId 목적지 장소 Id
 * @property {string} destList.actionType common(에뮬레이터, 실제 동작) or controller(실제 동작) or emulator(에뮬레이터)
 * @property {string[]} destList.trueNodeList Open, On 등 장치 동작 수행
 * @property {string[]} destList.falseNodeList Close, Off 등 장치 동작 정지
 */

/**
 * @typedef {Object} mSettingModeInfo 설정 명령(정해진 장치 개폐 명령)
 * @property {string} cmdId 설정 명령 ID
 * @property {string[]} trueNodeList Open, On 등 장치 동작 수행
 * @property {string[]} falseNodeList Close, Off 등 장치 동작 정지
 */

/**
 * @typedef {Object} mTempControlInfo 임시 명령 정보
 * @property {string} cmdName 명령 ID
 * @property {string[]} trueList 장치 Open, On nodeId 목록
 * @property {string[]} falseList 장치 Close, Off nodeId 목록
 */

/******************** controlInfo 끝  **********************/

module;
