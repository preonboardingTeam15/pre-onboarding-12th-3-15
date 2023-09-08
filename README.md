# 🚀 프리온보딩 프론트엔드 인턴십 [12th] - Week 3

> - 원티드 프리온보딩 프론트엔드 15팀입니다.
> - 불필요한 API 호출을 줄이고 로컬 캐싱을 적용하여 최적의 검색어 추천 기능을 구현하는 과제입니다.

</br>

## 🗓️ 진행 기간

### 2023.09.05 ~ 2023.09.08

</br>

## 🤝🏻 참여 멤버

<table>
  <tbody>
    <tr>
       <td align="center"><a href="https://github.com/junsobi"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/127650045?v=4"/><br /><sub><b>김준섭</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/seongm2n"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/62044613?v=4"/><br /><sub><b>신성민</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/ofcpire"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/115693464?v=4"/><br /><sub><b>이세환</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/whThswh"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/71033487?v=4"/><br /><sub><b>조정현</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/tjswo2292"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/55657931?v=4"/><br /><sub><b>최선재</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/Nyes98"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/111405218?v=4"/><br /><sub><b>박예성</b></sub></a><br /></td>
  </tbody>
</table>
</br>

## 💻 진행 방법

- **Notion** 활용  
  → 각자 Assignment 별 구현 방법을 기록하고 코드 설명
  → 회의를 통해 팀원들의 코드를 분석하고 Best Practice 정하기  
  → 커밋 메세지 컨벤션, Team 규칙을 정하기 위해 활용

- **Discord** 패널을 활용  
  → 팀원들의 의사소통 및 화면 공유를 통한 협업 툴로 활용

  </br>

## ✅ 규칙

### 커밋 메세지

| Commit Type | Format                                                                   |
| ----------- | ------------------------------------------------------------------------ |
| feat        | 새로운 기능 추가                                                         |
| fix         | 버그 수정                                                                |
| docs        | 문서수정                                                                 |
| style       | 코드 스타일 변경(코드 포매팅,세미콜론 누락 등)</br>기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경(CSS 등)                                            |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                   |
| refactor    | 코드 리팩토링                                                            |
| build       | 빌드 파일 수정                                                           |
| perf        | 성능 개선                                                                |
| chore       | 빌드 업무 수정, 패키지 매니저 수정(gitignore수정 등)                     |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                        |
| remove      | 파일을 삭제만 한 경우                                                    |

### ESLint

```shell
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "eqeqeq": "error",
    "dot-notation": "error",
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-useless-catch": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### Prettier

```shell
{
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "singleQuote": true,
  "arrowParens": "avoid"
}
```

</br>

## 🔧 프로젝트 실행방법

```shell
git clone https://github.com/preonboardingTeam15/pre-onboarding-12th-3-15.git

cd pre-onboarding-12th-3-15
```

```
npm install
```

```
npm start
```

</br>

## 🎥 데모 영상

**[배포 링크](https://pre-onboarding-12th-3-15.vercel.app/)**
</br>

## 📚 스택

- Environment  
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
- Development  
  ![React](https://img.shields.io/badge/react-ffffff?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
  ![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
  [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://github.com/uiwjs/react-markdown-preview)
  ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint)

- Communication  
  ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
  ![Notion](https://img.shields.io/badge/Notion-ffffff?style=for-the-badge&logo=notion&logoColor=black)

</br>

## 📂 프로젝트 구조

```bash
📦src
 ┣ 📂@types
 ┃ ┗ 📜sickType.d.ts
 ┣ 📂components
 ┃ ┣ 📂commons
 ┃ ┃ ┗ 📜SearchButton.tsx
 ┃ ┗ 📂search
 ┃ ┃ ┣ 📜HighlightText.tsx
 ┃ ┃ ┣ 📜RecommendedSearch.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┣ 📜SearchInput.tsx
 ┃ ┃ ┗ 📜SearchSick.tsx
 ┣ 📂context
 ┃ ┗ 📜DebouncedSearchContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useFetchFromApi.ts
 ┃ ┣ 📜useFetchFromCache.ts
 ┃ ┣ 📜useFetchGate.ts
 ┃ ┣ 📜useKeyPress.tsx
 ┃ ┗ 📜useOutsideClick.tsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜HttpClient.ts
 ┃ ┃ ┗ 📜SearchSickList.ts
 ┃ ┗ 📂cache
 ┃ ┃ ┗ 📜localCache.ts
 ┣ 📂pages
 ┃ ┣ 📜Main.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂styles
 ┃ ┣ 📜Button.ts
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜LayOutStyle.ts
 ┃ ┣ 📜RecommendedStyle.ts
 ┃ ┗ 📜SearchBar.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

</br>

## ✨ 주요 기능 목표 및 구현 설명

### Assignment 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

#### 구현

처음 구현을 했을 때는 검색에 대한 글자가 하나라도 포함이 되면 검색 글자가 포함된 모든 데이터가 출력이 되었습니다. 이렇게 했을 경우 관련이 없는 데이터도 보이게 됩니다.  
- 그래서 생각해 본 것은 **검색 한 것에 대한 데이터를 찾고 입력값과 데이터 첫글자와 같은지 비교해서 같으면 추천 검색으로 보여줍니다.**

- 추천 검색어는 10개 띄워주는 것으로 개수를 제한해 두었습니다.
- 닫기 버튼을 눌렀을 경우 검색창에서 입력한 글자를 없애주고 추천 기능 보여주는 창을 닫아줍니다.
- 검색창 이외의 공간을 누르게 되면 추천 기능을 보여주는 창을 닫아주고 입력한 글자는 그대로 유지합니다. 그리고 유지된 글자는 닫기 버튼을 눌렀을 때 없애줍니다.
- 입력한 검색어나 필터링 기준을 적용할 때, 대소문자를 무시하고 일치하는 항목을 찾기 위해 문자열을 소문자로 변환했습니다.

</br>

---

### Assignment 2. API 호출별로 로컬 캐싱 구현

#### 구현

본 과제에서는 웹 API의 불필요한 호출을 최소화하고, 사용자에게 빠른 응답을 제공하기 위해 로컬 캐싱을 구현하였습니다. 로컬 캐싱의 구현 방법으로 웹의 **cacheAPI**를 사용했습니다. 다음은 구체적인 구현 방법 및 cacheAPI의 사용 이유에 대한 설명입니다.

**1. 왜 cacheAPI를 사용했는지**

다음과 같은 이유로 cacheAPI를 사용했습니다.

- **퍼포먼스 향상** : 로컬 캐싱 사용의 근본적인 목적으로써, cacheAPI를 활용해 반복적인 네트워크 요청을 줄여 애플리케이션의 응답 시간을 줄일 수 있었습니다.
- **세부적인 캐시 데이터 제어** : cacheAPI를 사용함으로써 원하는 데이터를 캐시에 저장하고 만료시킬지를 결정할 수 있어, 캐시 데이터에 대한 보다 섬세한 제어가 가능했습니다.
- **브라우저 호환성** : 대부분의 웹 브라우저에서 cacheAPI를 지원하기 때문에 다양한 사용자 환경에서의 호환성이 보장됐습니다.

**2. 구현 방법**

**캐시에 데이터를 저장할 함수**와 **캐시에 저장된 데이터를 읽어 들일 함수** 두 가지를 작성했습니다. 다른 개발자들이 봤을 때도 직관적으로 이해하기 쉽도록 작명했고, **만료 기간** 또한 설정해 캐시 데이터의 관리를 보다 용이하게 할 수 있도록 구현했습니다.

- **2-1. writeToCache**

  - 캐시에 데이터를 저장하는 함수입니다. `key`, `data`, `EXPIRE_TIME` 의 세 가지 인자를 받습니다.

    1. `key` : 캐시에서 데이터를 식별하는 데 사용됩니다.
    2. `data` : 캐시에 저장될 데이터 값입니다.
    3. `EXPIRE_TIME` : 데이터의 만료 시간을 설정합니다.

  - 만료 시간 설정

    - 함수가 호출될 때마다 새로운 `expired` 값 (현재 시간 + EXPIRE_TIME)이 계산됩니다. 이 `expired` 값은 데이터가 캐시에서 만료되어야 할 시간을 나타냅니다.

  - 주어진 키와 데이터를 이용하여 `Request-Response` 쌍을 생성하고, 이 쌍을 미리 생성한 특정 캐시에 저장합니다.

- **2-2. readFromCache**

  - 캐시에서 데이터를 읽어오는 함수입니다. `key` 한 가지 인자만 받습니다. 해당 키를 이용해 캐시에서 데이터를 조회합니다.
  - 함수가 호출될 때, 먼저 주어진 키에 대한 데이터가 캐시에 있는지 확인합니다. 만약 존재하지 않으면 빈 배열을 반환합니다.
  - 데이터가 존재하면, 해당 데이터의 `expired` 값과 현재 시각을 비교하여 데이터의 유효성을 확인합니다.
    - 현재 시각이 `expired` 값보다 크다면 데이터는 만료된 것이므로, 캐시에서 삭제한 후 빈 배열을 반환합니다.
    - 만료되지 않았다면 저장된 데이터를 반환합니다.

</br>

---

### Assignment 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

#### 구현

- setTimeout을 사용해 함수 호출까지 디바운스 타임을 가집니다.

  - query 값이 새롭게 바뀔 시 setTimeout을 이용해 query가 debouncedQuery에 전달되어 API 호출이 되기까지 350ms의 디바운스 타임을 넣음으로서 연속된 입력 시 각 입력에 API를 호출하지 않도록 했습니다.

- 정규식 `/[ㄱ-ㅎㅏ-ㅣ]/`을 사용해 한글 자음 혹은 모음이 존재하는지 검사합니다.
  - 입력된 query에 완성형이 아닌 자음 혹은 모음이 존재한다면 잘못된 값(오타 혹은 입력 중 중단)으로 판단해 추천 검색어를 가져오지 않습니다.

</br>

---

### Assignment 4. API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

#### 구현

- 캐시에 기존의 데이터가 저장돼 있고 유효한지 확인합니다. 해당 조건에 부합한다면 API 호출은 이루어지지 않고 캐시에서 해당 데이터를 읽어옵니다.
- 조건에 부합하지 않는다면 API 호출을 통해 데이터를 불러옵니다. 해당 로직은 `try ~ catch` 문과 조건문을 활용해 구현했습니다.
- 콘솔에 찍힌 **calling api** 문구를 통해 캐시에서 데이터를 불러온건지, 아니면 API 호출을 통해 데이터를 불러온건지 확인이 가능합니다.

</br>

---

### Assignment 5. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

#### 구현

- addEventListener 를 이용하여 위, 아래 방향키 입력을 감지합니다.
- 키보드 입력이 감지되면 selectedItem의 값을 방향키에 따라 -1, +1 합니다.
- 추천 검색어 배열에서 나온 리스트들의 className을 index와 selectedItem를 비교하여 같을경우 'selected' 로 설정합니다.
- 'selected' 클래스에 스타일을 줌으로써, 검색어들의 이동이 가능합니다.
