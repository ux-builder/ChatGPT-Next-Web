import { BuiltinMask } from "./typing";

export const KO_MASKS: BuiltinMask[] = [
  {
    avatar: "1f60e",
    name: "대학원생 조교의 근로자성 여부",
    context: [
      {
        id: "expert-0",
        role: "user",
        content: "대학원생 조교가 ｢근로기준법｣ 상 근로자에 해당하는지 ?",
        date: "",
      },
      {
        id: "expert-1",
        role: "assistant",
        content:
          "귀 질의의 내용만으로는 구체적 사실관계를 확인할 수 없어 답변이 어려우나 ｢고등교육법｣에 따른 ‘조교’라면 ｢근로기준법｣ 상 근로자에 해당될 수 있습니다. \n\n ‒ 다만, 각 대학별로 운영형태가 다양하고 명칭은 ‘조교’라 하더라도 ｢고등교육법｣ 상 ‘조교’가 아닌 경우도 있을 것으로 사료되므로 일률적으로 판단할 수는 없고 계약의 형식에 관계없이 그 실질에 있어 사업 또는 사업장에 임금을 목적으로 종속적인 관계에서 사용자에게 근로를 제공하는지(대법원 2006.12.7. 선고 2004다29736 판결) 등에 따라 개별 구체적으로 판단하여야 할 것으로 보입니다. \n\n(근로기준정책과‒3627, 2017.6.12.)",
        date: "",
      },
      {
        id: "expert-3",
        role: "assistant",
        content:
          "좀 더 구체적인 상황을 같이 설명해 주시면 더 정확한 답변을 드릴 수 있습니다.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 2000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480413,
  },
  {
    avatar: "1f69b",
    name: "타 대학 시간강사 출강도 병행하는 대학교 부설연구소 연구원이 근로자인지 여부",
    context: [
      {
        id: "work-0",
        role: "user",
        content:
          "1. 채용경위 및 급여 \n본인은 동 대학교 부설 도시기술연구소에서 프로젝트를 수행하는 연구원으로 2004.9.1.부터 2007.8.31.(예정)까지 채용되어 구두계약에 의거 월급여 100만원을 수령키로 하고 입사하여 근무하고 있으며, 동 연구소에서의 급여는 학교법인에서 매월 100만원의 정액과 부정기적인 성과급(기타 추가 프로젝트 수행 시)이 일부 있었으며, 아울러 본인은 동 연구소 근무기간과 중복되게 ○○대학교와 서면계약에 의거 2003.3.1.부터 2005.2.28.까지의 기간 동안 ○○대학교 공과대학의 시간강사로 출강(타 대학도 일부 출강 병행)한 바 있음. \n\n 2. 담당업무 및 직위 \n 본인이 근무하였던 동 대학 부설 연구소는 외부 발주기관과 학교법인과의 유료 기술용역계약에 의거 수임 받은 프로젝트를 수행하는 연구소로 연구소장의 지휘하에 본인은 건설관리 및 경영연구실장으로 근무하고 있으며, 담당업무는 건설사업 관리기술 개발과 이를 종합적으로 최적화 하는 기법 개발에 관한 연구를 수행하였으며, 기타 세부적인 업무는 제안서 작성, 프로젝트 세부실시계획 작성, 건설연구실 운영방안 작성 등이었고, \n\n3. 근무장소 및 시간 \n근무시간 등에 대하여 서면 복무규정 등이 제정된 것은 없으나 명목상으로는 09:00부터 18:00까지였으나 근무기간 내내 업무량 과다로 인하여 연구소에서 숙식을 해결하면서 2~3일에 한 번씩 퇴근을 하였으며, 근무장소는 학교외부에 학교에서 임차한 건물에 소재한 연구소로 제한되었으며 4. 교육 및 업무지시 프로젝트업무를 효율적으로 수행하기 위하여 근무시간 중 수시로 지도교수로부터 세부적인 업무내용에 대하여 회의시간을 통하여 교육 및 업무지시를 받았고 \n\n5. 업무의 대체성 \n본 연구업무는 연구실에 근무하는 연구원들이 각각 나름대로의 전공 분야가 지정되어 있어 자기 담당분야 업무를 제3자에게 맡길 수 없으며, 본인이 맡은 업무는 본인 이외의 제3자가 수행할 수 없어 본인이 직접 담당을 하였으며, \n\n6. 작업도구 등의 소유관계 연구업무를 위하여 소요되는 컴퓨터, 필기구 등 모든 것은 연구원에서 공급하는 것을 사용하였으며, 본인의 자비로 이를 이용한 것은 없으며, \n\n7. 4대보험 등 \n대학교 부설연구소의 관행상 4대보험은 가입되지 아니한 상태임. 따라서 본인의 근로형태가 위와 같은 경우 연구원이라는 이유로 ｢근로기준법｣ 상 근로자성이 부인되는지 여부에 대하여 질의함.",
        date: "",
      },
      {
        id: "work-1",
        role: "assistant",
        content:
          "｢근로기준법｣ 상의 근로자라 함은 계약의 형식에 관계없이 그 실질에 있어서 사용자와 사용종속관계 아래서 임금을 목적으로 근로를 제공하는 자를 말하며, 여기서 사용종속관계가 있는지에 관하여는 업무의 내용이 사용자에 의하여          정하여지는지 여부, 취업규칙･복무규정･인사규정 등의 적용을 받으며 업무수행 과정에 있어서도 사용자로부터 구체적이고 직접적인 지휘･감독을 받는지 여부, 사용자에 의해 근무시간과 장소가 지정되고 이에 구속을 받는지 여부, 근로자     스스로가 제3자를 고용하여 업무를 대행케 하는 등 업무의 대체성 유무, 비품･원자재, 작업도구 등의 소유관계, 보수가 근로자체의 대상적 성격을 갖고 있는지 여부, 기본급이나 고정급이 정하여져 있는지 여부, 근로소득세의 원천징수 여부 등 보수에 관한 사항, 근로제공관계의 계속성과 사용자에의 전속성의 유무와 정도, 사회보장제도 등 다른 법령에 의해 근로자 지위를 인정해야 하는지 여부, 양당사자의 경제･사회적 조건 등 당사자 사이의 관계 전반에 나타나는 사정 등을 종합적으로 고려하여 판단해야 하는 것임.\n\n귀 질의 내용은 위와 같은 제반 사정에 대한 설명이 일부 부족하여 정확한 판단은 곤란하나, 귀 질의의 대학교 부설연구소 소속 연구원이 일정한 프로젝트와 그와 관련되는 업무를 수행하는 조건으로 3년간의 기간으로 채용되어 건설관리 및 경영연구실장의 직위를 담당하면서, 복무규정 등이 제정된 것은 없으나 명목상 일정한 근무시간(09:00~18:00) 동안 연구소 내에서 업무를 수행해야 하며, 업무수행 과정에 지도교수로부터 수시로 세부적인 교육 및 업무지시를 받고, 업무수행의 대가로 구두계약에 따라 매월 100만원의 고정급과 부정기적인 성과급(프로젝트 추가 시)을 학교법인으로부터 지급받으며, 다른 사람으로 하여금 업무를 대체 수행하게 할 수 없고, 연구업무에 필요한 각종 도구나 장비를 연구소에서 공급하는 것을 사용하는 등 사용자와의 관계에서 종속적인 지위에서 임금을 목적으로 근로를 제공한다고 볼 수 있는 이상, 연구소에 소속되어 있으면서도 같은 대학교나 다른 대학교에 시간강사로 출강한다거나 4대 보험에 가입되어 있지 않다는 등의 사정만으로 ｢근로기준법｣ 상 근로자가 아니라고 볼 수는 없다고 사료됨.",
        date: "",
      },
      {
        id: "work-2",
        role: "user",
        content: "질문과 답변을 좀 더 이해하기 쉽게 설명해줘요.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480513,
  },
  {
    avatar: "1f469-200d-1f4bc",
    name: "직무 분석 및 요구사항 파악",
    context: [
      {
        id: "cons-0",
        role: "user",
        content: "이 직무에 필요한 핵심 기술과 경험은 무엇인가요?",
        date: "",
      },
      {
        id: "cons-1",
        role: "assistant",
        content:
          "해당 직무(예: 소프트웨어 엔지니어)에 필요한 핵심 기술과 경험을 분석하여 제공합니다.",
        date: "",
      },
      {
        id: "cons-2",
        role: "assistant",
        content: "어떤 직무에 대한 질문을 하시겠습니까?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480514,
  },
  {
    avatar: "1f4d5",
    name: "효과적인 직무 공고 문구 작성",
    context: [
      {
        id: "red-book-0",
        role: "user",
        content:
          "어떻게 하면 최고의 인재를 끌어들일 수 있는 직무 공고를 작성할 수 있을까요?",
        date: "",
      },
      {
        id: "red-book-1",
        role: "assistant",
        content:
          "직무명, 필수 자격, 책임, 회사 문화를 강조하는 효과적인 직무 공고문을 제공합니다.",
        date: "",
      },
      {
        id: "red-book-2",
        role: "assistant",
        content:
          "어떤 사업을 하는 회사이고 어떤 직무를 수행하는 직원을 모집하는지 알려주세요.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 0,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480534,
  },
  {
    avatar: "1f4d1",
    name: "직무 공고 최적화 및 게시 전략",
    context: [
      {
        id: "cv-0",
        role: "user",
        content:
          "해당 직무(예: 프로젝트 매니저) 공고를 게시하기에 가장 적합한 플랫폼과 최적화 전략은 무엇일까요?",
        date: "",
      },
      {
        id: "cv-1",
        role: "assistant",
        content:
          "직무 공고의 가시성과 지원자의 품질을 높이기 위해 고려해야 할 요소는 무엇인가요?",
        date: "",
      },
      {
        id: "cv-2",
        role: "assistant",
        content:
          "생산관리자 채용을 위한 직무 공고의 가시성과 지원자의 품질을 높이기 위해 어떤 요소들을 고려해야 하나요? 예를 들어, 공고의 제목과 내용, 게시 위치, 타겟팅 전략 등에 대한 조언을 구합니다.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 0.5,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "직무 분석 및 채용 계획 수립",
    context: [
      {
        id: "idea-0",
        role: "system",
        content:
          "신규 채용을 위한 직무 분석과 채용 계획 수립 방법에 대한 최신 동향과 전략은 무엇인가요?",
        date: "",
      },
      {
        id: "idea-1",
        role: "user",
        content:
          "특정 직무(예: 안전관리자)에 필요한 역량과 자격 요건을 어떻게 정의하고, 채용 목표와 일정을 어떻게 설정해야 할까요?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "직무 공고 작성 및 게시",
    context: [
      {
        id: "job1-0",
        role: "user",
        content:
          "효과적인 직무 공고를 어떻게 작성하고, 어느 플랫폼에 게시하는 것이 가장 좋을까요?",
        date: "",
      },
      {
        id: "job1-1",
        role: "assistant",
        content:
          "직무 요구 사항에 맞는 공고 작성 및 게시 전략을 제공합니다. 직무의 역할, 필요한 자격, 회사 문화 등을 어떻게 명확하게 설명할 수 있는지 조언해 드립니다.",
        date: "",
      },
      {
        id: "job1-2",
        role: "assistant",
        content: "어떤 직무에 대한 공고를 작성할지 알려주세요.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "지원서 접수 및 검토",
    context: [
      {
        id: "job2-0",
        role: "system",
        content:
          "지원자 검토 및 선별 과정을 효율적으로 관리하기 위한 최신 기술과 도구는 무엇인가요?",
        date: "",
      },
      {
        id: "job2-1",
        role: "user",
        content:
          "다수의 지원자 중에서 자격 요건과 직무 요구 사항에 가장 부합하는 인재를 어떻게 식별할 수 있을까요?",
        date: "",
      },
      {
        id: "job2-2",
        role: "assistant",
        content: "어떤 직무를 채용할 예정인가요?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "신입사원 오리엔테이션 기획",
    context: [
      {
        id: "job3-0",
        role: "system",
        content:
          "신입사원을 위한 효과적인 오리엔테이션 프로그램 기획에 대한 최신 동향과 전략은 무엇인가요?",
        date: "",
      },
      {
        id: "job3-1",
        role: "user",
        content:
          "신입사원의 성공적인 조직 적응을 돕기 위해 오리엔테이션에서 어떤 내용을 다루는 것이 가장 중요할까요?",
        date: "",
      },
      {
        id: "job2-2",
        role: "assistant",
        content: "어떤 아이디어라도 단순히 말해주세요.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "교육 프로그램 개발 및 실행",
    context: [
      {
        id: "job3-0",
        role: "user",
        content:
          "신입사원을 위한 교육 프로그램을 어떻게 개발하고 실행해야 효과적일까요?",
        date: "",
      },
      {
        id: "job3-1",
        role: "assistant",
        content:
          "신입사원의 역량 개발과 조직 문화 적응을 지원하기 위한 교육 프로그램 개발 및 실행 전략을 제공합니다. 프로그램의 구조, 핵심 내용, 그리고 참여를 유도하는 방법에 대한 조언을 드립니다.",
        date: "",
      },
      {
        id: "job2-2",
        role: "assistant",
        content: "관심 있는 프로그램에 대해 말해주세요.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
  {
    avatar: "1f4b8",
    name: "교육 프로그램 평가 및 개선",
    context: [
      {
        id: "job4-0",
        role: "system",
        content:
          "신입사원 교육 프로그램의 효과를 평가하고 개선하기 위한 최신 방법론과 도구는 무엇인가요?",
        date: "",
      },
      {
        id: "job4-1",
        role: "user",
        content:
          "교육 프로그램의 효과성을 어떻게 측정하고, 어떤 점을 개선해야 합니까?",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-4-1106-preview",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "ko",
    builtin: true,
    createdAt: 1688899480536,
  },
];
