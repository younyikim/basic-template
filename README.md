# React, TypeScript, Vite 기반 기본 템플릿

**Table of Content**

1. [템플릿 정보](#템플릿-정보)
2. [Vite로 프로젝트 시작하기](#1-vite로-프로젝트-시작하기)
3. [ESLint, Prettier 설정](#2-eslint-prettier-설정)
4. [Husky, lint-staged 설정](#3-husky-lint-staged-설정)
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
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
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

### 3. Husky, lint-staged 설정

**Husky란?**

- Git은 Hook이라는 기능을 통해, Git의 특정 이벤트(add, commit, push 등)을 실행 시, 해당 이벤트에 Hook(갈고리)를 걸어 Hook에 설정된 스크립트를 실행할 수 있다.
- Husky는 이러한 Git Hook을 간편하게 사용할 수 있도록 도와주는 도구이다.
- Husky를 사용하는 이유는, 협업 시 ESLint와 Prettier를 사용해 팀내 규칙을 정의해 코딩을 한다. 하지만 ESLint와 Prettier 규칙을 지키지 않은 채 원격 저장소에 코드를 올릴 수 있고, 이렇게 되면 정의한 코딩 규칙의 의미가 퇴색되고, 코드 일관성이 줄어들어 원활한 협업이 어려워질 수 있다. 하지만 Husky를 사용하면 Git의 특정 이벤트(add, commit, push 등)이 발생하기 전 자동으로 ESLint와 Prettier를 작동시켜 이런 경우를 사전에 방지할 수 있다.

**Lint-Staged란?**

- Git의 특정 이벤트가 발생될 때마다 전체 애플리케이션에서 검사해야하는 확장자에 해당하는 모든 파일을 검사하는 것은 비효율적이다. lint-staged를 husky와 함께 사용하면, 변경된 파일들만 검사를 진행한다.

**husky & lint-staged 설치하기**

```bash
$ npx mrm lint-staged
```

> [mrm](https://mrm.js.org/)이란?
> 오픈소스 프로젝트 환경 설정(`package.json`, `.gitignore` 등) 을 동기화 하기 위한 커맨드 라인 도구이다. mrm을 사용하여 lint-staged를 설치하면 필요한 기본 설정이 제공된다.

- 위 명령어를 실행하면, `.husky` 폴더가 생성되며, 폴더 하위에 `pre-commit`파일이 생성된다.
  - pre-commit 파일이 존재하지 않는다면, 아래 명령어를 실행한다.
    - `$ npx husky add .husky/pre-commit "yarn lint-staged"`
- 그리고`package.json`파일에 husky, lint-staged가 devDependencies에 설치되며, lint-staged 검사를 수행할 대상을 정의하는 스크립트가 추가된다.
- TypeScript를 사용하는 경우, lint-staged 스크립트를 아래와 같이 수정한다.
  - 검사 대상 파일을 ts, tsx 파일로 지정하고, Prettier와 ESLint를 모두 사용하고 있기 때문에 아래와 같이 스크립트를 수정한다.

```json
"lint-staged": {
	"*.{ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ]
}
```

### 4. TypeScript에서 절대 경로 설정

- 특정 컴포넌트나 파일을 import할 때 상대 경로를 사용하면, 경로의 depth가 깊어질 수록 가독성이 매우 떨어진다. 이러한 문제를 방지하기 위해 `tsconfig.json` 설정을 통해 `절대경로`를 설정할 수 있다.
- Vite를 사용하는 경우, `tsconfig.json`, `vite.config.ts`에서 모두 절대 경로 설정이 필요하다.

**(1) `tsconfig.json` 설정**

- `compilerOptions`옵션의 `baseUrl`, `paths`를 이용해 절대경로를 설정한다.
  - `baseUrl` : paths 설정을 위해 반드시 필요한 옵션
  - `paths` : key-value 쌍으로 이루어진 객체이며, 절대경로를 정의하고자 하는 경로 이름을 key에 입력하여 baseUrl을 기준으로 상대적인 경로를 value에 입력한다.

```json
// tsconfig.json
{
	"compilerOptions": {
		"baseUrl": ".", // 이 경우는 tsconfig.json이 존재하는 루트 디렉토리를 기준으로 삼는다.
		"paths": {
			"@/*": ["src/*"],
			"@components/*": ["src/components/*"],
			/... other .../
		}
	}
}
```

**(2) `vite.config.ts` 설정**

- 절대경로에 필요한 플러그인 설치 : vite-tsconfig-paths, @types/node

```bash
$ yarn add --dev vite-tsconfig-paths @types/node
```

- `vite.config.ts`
  - defineConfig 내부의 resolve의 alias 배열 안에 객체 형태로 절대 경로를 입력하면 된다.
  - tsconfig.json에서 paths에 정의한 것과 마찬가지로, `find` 에는 절대 경로를 정의하고자 하는 경로 이름, `replacement`에는 baseUrl을 기준으로 상대적인 경로를 value에 입력한다.

```js
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: resolve(__dirname, 'src') },
			{ find: '@components', replacement: resolve(__dirname, 'src/components') },
			/... other .../,
		],
	},
});
```

**사용 예시**

```js
import path1 from '@components/home/main.tsx';
```

### 5. 라이브러리 설치

- **Routing** : React Router, React Router DOM(v6)
  - React-router-dom 설치 : `$ yarn add react-router-dom`
- **Styling** : Tailwind CSS (Utility-First-CSS)
  - Tailwind CSS 설치
    ```bash
    $ yarn add --dev tailwindcss postcss autoprefixer
    $ npx tailwindcss init -p
    ```
  - 함께 설치하면 좋은 툴들
    1. VSC의 `Tailwind CSS IntelliSense` 익스텐션
    2. VSC의 `Tailwind Document` 익스텐션
    3. [Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
- **Headless UI 컬렉션** : [shadcn/ui](https://ui.shadcn.com/)
- **비동기 통신 라이브러리** : [Axios](https://github.com/axios/axios)
  ```bash
  src/apis
    - /axios
    --- index.ts // Module export 파일
    --- instance.ts // axios instance 생성 관련 코드
    --- methods.ts // HTTP 메서드 관련 코드 모음
  ```

---

- 추가 예정 패키지들

* **상태 관리 라이브러리** : Zustand
* **Data Fetching** : TanStack Query + Axios
* **Animation 라이브러리**: Framer Motion
* **Code Style**: ESLint + Prettier

### 6. React Query 아키텍쳐 추가

### 7. Axios 캡슐화
