const data = [
	{"id": "ajson0", "parent": "#", "text": "진행중", "type": "root"},
	{"id": "ajson1", "parent": "ajson0", "text": "신규대출(FM11120200005)"},
	{"id": "ajson2", "parent": "ajson1", "text": "심사"},
	{"id": "ajson3", "parent": "ajson2", "text": "대출신청"},
	{"id": "ajson4", "parent": "ajson2", "text": "정보동의"},
	{"id": "ajson5", "parent": "ajson3", "text": "소상공인 정책자금 대출신청서", "type": "file"},
	{"id": "ajson6", "parent": "ajson3", "text": "기업현황 및 사업계획서", "type": "file"},
	{"id": "ajson7", "parent": "ajson3", "text": "소상공인 정책자금 윤리준수 약속", "type": "file"},
	{"id": "ajson8", "parent": "ajson4", "text": "개인(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson9", "parent": "ajson4", "text": "개인(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson10", "parent": "ajson4", "text": "공공부문 마이데이터 서비스 이용 동의서", "type": "file"},
	
	{"id": "ajson11", "parent": "#", "text": "2022-10-15", "type": "root"},
	{"id": "ajson12", "parent": "ajson11", "text": "신규대출(FM111202000003)"},
	{"id": "ajson13", "parent": "ajson12", "text": "심사"},
	{"id": "ajson14", "parent": "ajson12", "text": "약정"},
	{"id": "ajson15", "parent": "ajson13", "text": "대출신청"},
	{"id": "ajson16", "parent": "ajson13", "text": "정보동의"},
	{"id": "ajson17", "parent": "ajson14", "text": "공통서류"},
	{"id": "ajson18", "parent": "ajson14", "text": "법인서류"},
	{"id": "ajson19", "parent": "ajson14", "text": "보증서류"},
	{"id": "ajson20", "parent": "ajson15", "text": "소상공인 정책자금 대출신청서", "type": "file"},
	{"id": "ajson21", "parent": "ajson15", "text": "기업현황 및 사업계획서", "type": "file"},
	{"id": "ajson22", "parent": "ajson15", "text": "소상공인 정책자금 윤리준수 약속", "type": "file"},
	{"id": "ajson23", "parent": "ajson16", "text": "기업(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson24", "parent": "ajson16", "text": "개인(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson25", "parent": "ajson16", "text": "공공부문 마이데이터 서비스 이용 동의서", "type": "file"},
	{"id": "ajson26", "parent": "ajson17", "text": "대출거래 약정서", "type": "file"},
	{"id": "ajson27", "parent": "ajson17", "text": "대출거래상품설명서", "type": "file"},
	{"id": "ajson28", "parent": "ajson17", "text": "자동이체출금신청서", "type": "file"},
	{"id": "ajson29", "parent": "ajson18", "text": "책임경영이행약정서", "type": "file"},
	{"id": "ajson30", "parent": "ajson18", "text": "자금집행계획서", "type": "file"},
	{"id": "ajson31", "parent": "ajson19", "text": "근보증서", "type": "file"},
	{"id": "ajson32", "parent": "ajson19", "text": "실제경영자 확인서", "type": "file"},
	{"id": "ajson33", "parent": "ajson19", "text": "추가약정서(특정채무보증용)", "type": "file"},
	{"id": "ajson34", "parent": "ajson19", "text": "확약서(연대보증채무전액부담용)", "type": "file"},
	{"id": "ajson35", "parent": "ajson19", "text": "근질권설정계약서", "type": "file"},
	
	{"id": "ajson36", "parent": "#", "text": "2022-10-25", "type": "root"},
	{"id": "ajson37", "parent": "ajson36", "text": "신규대출(FM111202000003)"},
	{"id": "ajson38", "parent": "ajson37", "text": "심사"},
	{"id": "ajson39", "parent": "ajson37", "text": "약정"},
	{"id": "ajson40", "parent": "ajson38", "text": "대출신청"},
	{"id": "ajson41", "parent": "ajson38", "text": "정보동의"},
	{"id": "ajson42", "parent": "ajson39", "text": "공통서류"},
	{"id": "ajson43", "parent": "ajson39", "text": "법인서류"},
	{"id": "ajson44", "parent": "ajson39", "text": "보증서류"},
	{"id": "ajson45", "parent": "ajson40", "text": "소상공인 정책자금 대출신청서", "type": "file"},
	{"id": "ajson46", "parent": "ajson40", "text": "기업현황 및 사업계획서", "type": "file"},
	{"id": "ajson47", "parent": "ajson40", "text": "소상공인 정책자금 윤리준수 약속", "type": "file"},
	{"id": "ajson48", "parent": "ajson41", "text": "기업(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson49", "parent": "ajson41", "text": "개인(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson50", "parent": "ajson41", "text": "공공부문 마이데이터 서비스 이용 동의서", "type": "file"},
	{"id": "ajson51", "parent": "ajson42", "text": "대출거래 약정서", "type": "file"},
	{"id": "ajson52", "parent": "ajson42", "text": "대출거래상품설명서", "type": "file"},
	{"id": "ajson53", "parent": "ajson42", "text": "자동이체출금신청서", "type": "file"},
	{"id": "ajson54", "parent": "ajson43", "text": "책임경영이행약정서", "type": "file"},
	{"id": "ajson55", "parent": "ajson43", "text": "자금집행계획서", "type": "file"},
	{"id": "ajson56", "parent": "ajson44", "text": "근보증서", "type": "file"},
	{"id": "ajson57", "parent": "ajson44", "text": "실제경영자 확인서", "type": "file"},
	{"id": "ajson58", "parent": "ajson44", "text": "추가약정서(특정채무보증용)", "type": "file"},
	{"id": "ajson59", "parent": "ajson44", "text": "확약서(연대보증채무전액부담용)", "type": "file"},
	{"id": "ajson60", "parent": "ajson44", "text": "근질권설정계약서", "type": "file"},
	
	{"id": "ajson61", "parent": "#", "text": "사후관리", "type": "root"},
	{"id": "ajson62", "parent": "ajson61", "text": "일반사후관리"},
	{"id": "ajson63", "parent": "ajson62", "text": "법인서류"},
	{"id": "ajson64", "parent": "ajson63", "text": "대출금 사용내역표", "type": "file"},
	{"id": "ajson65", "parent": "ajson63", "text": "대출금 사용내역 점검표", "type": "file"},
	{"id": "ajson66", "parent": "ajson63", "text": "책임경영의무 미이행에 따른 채무 부담 통지서", "type": "file"},
	
	{"id": "ajson67", "parent": "#", "text": "대리대출", "type": "root"},
	{"id": "ajson68", "parent": "ajson67", "text": "신청서류"},
	{"id": "ajson69", "parent": "ajson68", "text": "공통서류"},
	{"id": "ajson70", "parent": "ajson69", "text": "소상공인 정책자금 융자 신청서", "type": "file"},
	{"id": "ajson71", "parent": "ajson69", "text": "소상공인 정책자금 융자신청 자가진단 및 유의사항", "type": "file"},
	{"id": "ajson72", "parent": "ajson69", "text": "개인(신용)정보 수집·이용·제공·조회·활용 동의서", "type": "file"},
	{"id": "ajson73", "parent": "ajson69", "text": "공공부문 마이데이터 서비스 이용 동의서", "type": "file"},
	{"id": "ajson74", "parent": "ajson69", "text": "소상공인 정책자금 윤리준수 약속", "type": "file"},
	{"id": "ajson75", "parent": "ajson69", "text": "소상공인 정책자금 융자신청 사전고지 확약서", "type": "file"},
	
	{"id": "ajson76", "parent": "#", "text": "구문서"},
	{"id": "ajson77", "parent": "ajson76", "text": "하위 디렉토리"},
]

$("#tree").jstree({
	"plugins": ["types", "themes"],
	"core": {
		"data": data,
		"themes": {
			"name": "proton",
			"responsive": true
		}
	},
	"types": {
		"root": {
			"icon": "/treeViewFrame/dist/themes/proton/folder.png"
		},
		"default": {
			"icon": "/treeViewFrame/dist/themes/proton/folder.png"
		},
		"file": {
			"icon": "/treeViewFrame/dist/themes/proton/document_empty.png"
		}
	}
}).bind("loaded.jstree", function(e) {
	const root = $("#tree").jstree(true).get_node("ajson0");
	$("#tree").jstree("open_node", root.id);
	
}).bind("refresh.jstree", function(e, d) {
	const root = $("#tree").jstree(true).get_node("ajson0");
	$("#tree").jstree("open_node", root.id);
	
}).bind("before_open.jstree", function(e, data) {
	if(data.node.parent == "#") {
		const array = [];
		$.each(data.node.children_d, function(idx, item) {
			array[idx] = item;
		});
		array.forEach((value, idx) => {
			$("#tree").jstree("open_node", value);
		});
	}
});

