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

**[배포 링크 - 추후 업데이트]**

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
 ┃ ┣ 📜sickType.d.ts
 ┣ 📂components
 ┃ ┗ 📂commons
 ┃ ┃ ┗ 📜SearchButton.tsx
 ┃ ┗ 📂search
 ┃ ┃ ┗ 📜RecommendedSearch.tsx
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜SearchSick.tsx
 ┣ 📂context
 ┃ ┗ 📜DebouncedSearchContext.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useKeyPress.tsx
 ┃ ┗ 📜useOutsideClick.tsx
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜HttpClient.tsx
 ┃ ┃ ┗ 📜SearchSickList.tsx
 ┃ ┣ 📂cache
 ┃ ┃ ┗ 📜localCache.tsx
 ┣ 📂pages
 ┃ ┃ ┗ 📜Main.tsx
 ┃ ┃ ┗ 📜NotFound.tsx
 ┣ 📂styles
 ┃ ┃ ┗ 📜Button.ts
 ┃ ┃ ┗ 📜GlobalStyle.ts
 ┃ ┃ ┗ 📜LayOutStyle.ts
 ┃ ┃ ┗ 📜RecommendedStyle.ts
 ┃ ┃ ┗ 📜SearchBar.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
```

</br>

## ✨ 주요 기능 목표 및 구현 설명

### Assignment 1. 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

#### 구현

- **추후 업데이트(현재 Best Practice)**
- slice해서 값을 비교하는 방식으로 검색
  예시) 검색한 글자가 “암”이면 “암”으로 시작하는 데이터만 가져오기
- 대소문자 구분 없게 toLowercase() 적용
- 추천 검색은 10개만 나오게 적용

</br>

---

### Assignment 2. API 호출별로 로컬 캐싱 구현

#### 구현

- **추후 업데이트(현재 Best Practice)**

- cacheAPI 활용

[setCache]

- Request 객체를 생성하여 key로 사용
- Response 객체를 생성하여 저장될 데이터값과 만료 기간을 함께 저장
- cache.put(request, response)를 사용하여 요청 - 응답 쌍을 캐시에 저장

[getCache]

- cache.match(key)를 사용해 키에 해당하는 데이터 캐시에서 탐색
- 캐시에 없는 데이터(탐색이 안 되는 데이터)일 경우 null 반환
- 캐시에 있는 데이터(이전에 탐색했던 데이터)일 경우 해당 데이터 반환
- 캐시 만료 기간이 지나면 해당 데이터를 캐시에서 삭제

</br>

---

### Assignment 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

#### 구현

- **추후 업데이트(현재 Best Practice)**
- input value가 변경 시 useEffect로 감지, setTimeout으로 0.3초 뒤에 API 호출
  setTimeout 도중 다시 이벤트 발생하면 clearTimeout으로 이전 setTImeout 제거하고 다시 0.3초 setTimeout
  let getTimeout: NodeJS.Timer | null = null;
  if (getTimeout) clearTimeout(getTimeout);
  getTimeout = setTimeout(() => { // api 호출 },debounceTime)
  완성형이 아닌 자음 혹은 모음이 있을 시 정규식으로 검사 후 api 호출하지 않음

</br>

---

### Assignment 4. API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

#### 구현

- **추후 업데이트(현재 Best Practice)**
- 실제 요청시 (calling api) 콘솔 노출
  캐싱데이터를 꺼내와서 데이터 노출시 (캐싱으로 반환된 결과값)이라는 콘솔 찍히도록 구현

</br>

---

### Assignment 5. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

#### 구현

- **추후 업데이트(현재 Best Practice)**
- 위, 아래 키보드 입력시 index -1, +1
- 마우스 오버시 index 변경
- index의 배경색 변경
