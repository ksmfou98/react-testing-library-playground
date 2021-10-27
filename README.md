# 리액트 테스트 코드

## 테스트 주도 개발(Test Driven Development)

### Test Driven Development란 무엇인가 ?

실제 코드를 작성하기 전에 테스트 코드를 먼저 작성한다.
테스트 코드를 작성한 후 그 테스트 코드를 `Pass` 할 수 있는 실제 코드를 작성하는 방식이다.

1. 원하고자 하는 기능의 테스트 코드 작성
2. 테스트 실행 `Fail`
3. 테스트 코드에 맞는 실제 코드 작성
4. 테스트 실행 `Pass`

### TDD를 하면 좋은 점

- TDD를 하므로 인해 많은 기능을 테스트하기에 소스 코드에 안정감이 부여된다.
- 실제 개발하면서 많은 시간이 소요되는 부분은 디버깅 부분이기에 TDD를 사용하면 디버깅 시간이 줄어들고 실제 개발 시간도 줄어든다.
- 소스코드 하나하나를 더욱 신중하게 짤 수 있기 때문에 깨끗한 코드가 나올 확률이 높다.

## 리액트 테스팅 라이브러리 (react-testing-library)

https://github.com/testing-library/jest-dom

### FireEvent API

유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용한다.
https://testing-library.com/docs/dom-testing-library/api-events/
