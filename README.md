# React, TypeScript, Vite 기반 기본 템플릿

#### 템플릿 정보

개발도구 : Vite, TypeScript, ESLint, Prettier, Husky, Lint-staged

패키지 매니저: Yarn

프레임워크 및 라이브러리 : React, React Router, React Query, Recoil, Emotion, Material UI

기타 라이브러리 : Axios, Dayjs, Loadsh

---

#### 1. Vite로 프로젝트 시작하기

> Node.js v18+, v20+ 이상

**설치**

```
$ yarn create vite my-react-ts-app --template react-ts
```

-   Vite에서는 Vanilla js / ts, React js / ts, Vue js / ts 등 다양한 템플릿을 제공하기 때문에 원하는 템플릿을 적절히 고르면 된다.
-   `my-react-ts-app` 을 프로젝트 or 애플리케이션 이름으로 바꿔야 한다.

**프로젝트 디렉토리로 이동**

```
$ cd my-react-ts-app
```

**종속성 설치**

```
$ yarn
```

#### 2. ESLint, Prettier, Husky 설정

**ESLint**

> Lint란?
> Lint는 소스 코드에 문제가 있는지 탐색하는 작업을 의미하며, Linter는 이 작업을 도와주는 소프트웨어 도구를 의미한다. 자바스크립트와 같이 컴파일 과정이 없는 인터프리터 언어의 경우, 런타임 에러가 발생할 확률이 높기 때문에, 린트 작업을 통해 사전에 에러를 최대한 잡아주는 것이 중요하다. 대표적인 자바스크립트 Linter가 ESLint이다.

**ESLint 설치**

-   Vite의 react-ts 템플릿을 사용하여 프로젝트를 세팅했기 때문에 기본적인 ESLint는 설정이 되어있다.

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
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
};
```

-   `plugin:@typescript-eslint/recommended`: TypeScript를 사용하는 프로젝트에 필요한 추가적인 ESLint 규칙을 정의하고, 일반적으로 권장되는 Recommended 규칙을 사용한다.
-   `plugin:react-hooks/recommended`: React 애플리케이션 내에서 React Hooks 규칙을 정의하고, 일반적으로 권장되는 Recommeded 규칙을 사용한다.
