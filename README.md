# React, TypeScript, Vite 기반 기본 템플릿

**Table of Content**

1. [템플릿 정보](#템플릿-정보)
2. [Vite로 프로젝트 시작하기](#1-vite로-프로젝트-시작하기)
3. [ESLint, Prettier 설정](#2-eslint-prettier-설정)
4. [Husky 설정](#3-husky-설정)
5. [TypeScript에서 절대 경로 설정](#4-typescript에서-절대-경로-설정)
6. [라이브러리 설치](#5-라이브러리-설치)
7. [React Query 아키텍쳐 추가](#6-react-query-아키텍쳐-추가)
8. [Axios 캡슐화](#7-axios-캡슐화)

---

### 0. 템플릿 정보

개발도구 : Vite, TypeScript, ESLint, Prettier, Husky, Lint-staged

패키지 매니저: Yarn

프레임워크 및 라이브러리 : React, React Router, React Query, Recoil, Emotion, Material UI

기타 라이브러리 : Axios, Dayjs, Loadsh

---

### 1. Vite로 프로젝트 시작하기

> Node.js v18+, v20+ 이상

**설치**

```
$ yarn create vite my-react-ts-app --template react-ts
```

- Vite에서는 Vanilla js / ts, React js / ts, Vue js / ts 등 다양한 템플릿을 제공하기 때문에 원하는 템플릿을 적절히 고르면 된다.
- `my-react-ts-app` 을 프로젝트 or 애플리케이션 이름으로 바꿔야 한다.

**프로젝트 디렉토리로 이동**

```
$ cd my-react-ts-app
```

**종속성 설치**

```
$ yarn
```

**.gitignore 설정**

- Zero-install을 사용하지 않는 경우, 아래 파일들을 .gitignore에 추가 ([관련 링크](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored))

```bash
# yarn 패키지 관련
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### 2. ESLint, Prettier 설정

**ESLint**

> Lint란?
> Lint는 소스 코드에 문제가 있는지 탐색하는 작업을 의미하며, Linter는 이 작업을 도와주는 소프트웨어 도구를 의미한다. 자바스크립트와 같이 컴파일 과정이 없는 인터프리터 언어의 경우, 런타임 에러가 발생할 확률이 높기 때문에, 린트 작업을 통해 사전에 에러를 최대한 잡아주는 것이 중요하다. 대표적인 자바스크립트 Linter가 ESLint이다.

**ESLint 설치**

- Vite의 react-ts 템플릿을 사용하여 프로젝트를 세팅했기 때문에 기본적인 ESLint는 설정이 되어있다.

**ESLint 설정 - .eslintrc.cjs**

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```

- `plugin:@typescript-eslint/recommended`: TypeScript를 사용하는 프로젝트에 필요한 추가적인 ESLint 규칙을 정의하고, 일반적으로 권장되는 Recommended 규칙을 사용한다.
- `plugin:react-hooks/recommended`: React 애플리케이션 내에서 React Hooks 규칙을 정의하고, 일반적으로 권장되는 Recommeded 규칙을 사용한다.

---

**Prettier**

> 코드 포맷터(Code Formatter)란?
> 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 자동으로 변환해주는 도구

**Prettier 설치**

- ESLint에도 코드 포맷팅 기능이 존재하기 때문에 Prettier와 ESLint를 함께 사용하는 경우, 두 설정이 충돌하는 문제가 발생하기 때문에 아래와 같은 추가적인 플러그인 설치가 필요하다.

```bash
$ yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

- `eslint-config-prettier` : ESLint와 충돌할 수 있는 Prettier의 rule을 끈다.
- `eslint-plugin-prettier` : Prettier에 걸린 부분들을 ESLint 에러로 걸리도록 한다.

**ESLint 설정파일 수정 - .eslintrc.cjs**

- prettier 를 ESLint 의 플러그인으로써 동작하게 하고, prettier의 포맷팅 이슈를 ESLint 의 에러 리포팅으로 출력하기 위해 `extends`에 아래와 같이 추가한다.

```js
// .eslintrc.cjs
module.exports = {
  ...
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // --> 추가!
  ],
 ...
};
```

**설정파일 생성 - .prettierrc.cjs**

- 패키지 설치 후, `.prettierrc.cjs`설정 파일 생성 후 아래의 내용을 작성 후 저장한다.
- 필요에 따라 내용을 추가 / 삭제하면 된다.

```js
module.exports = {
 trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true, // [1,2] -> [ 1, 2 ]
  semi: true,
  useTabs: true,
  arrowParens: "avoid", // (x) => x를 x => x로 변환
  endOfLine: "lf",>)
}
```

**VSC 설정**

- Default formatter : Prettier로 설정한다.
- Format On Save(Optional): 저장 시, 자동 포맷팅을 수행한다.

---

### 3. Husky 설정

### 4. TypeScript에서 절대 경로 설정

### 5. 라이브러리 설치

### 6. React Query 아키텍쳐 추가

### 7. Axios 캡슐화
