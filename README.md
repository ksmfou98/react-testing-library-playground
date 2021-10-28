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

<br />

## 리액트 테스팅 라이브러리 (react-testing-library)

https://github.com/testing-library/jest-dom

### FireEvent API

유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야하는 경우 사용한다.
https://testing-library.com/docs/dom-testing-library/api-events/

<br />

## 메모

- 현재까지는 getByTestId 쿼리를 이용하여 엘레멘트에 접근해서 테스트를 진행했다. 이 방법이 더 편리하긴 하지만 testing library에서 추천하는 쿼리 사용 우선 순위가 있다.  
  https://testing-library.com/docs/queries/about/#priority

- 이전에 테스팅에서 버튼을 클릭했을 때 fireEvent API를 사용했었다. 이때 fireEvent를 사용해서 잘 처리를 해줬지만 userEvent API를 사용하는게 더 좋은 방법이다.  
  `fireEvent.click(element) < userEvent.click(element)`

  그 이유는 fireEvent로 버튼을 클릭하면 fireEvent.click(button) 버튼이 focus 되지 않는다. 하지만 userEvent로 클릭하면 userEvent.click(button) 버튼이 focus 가 된다. 이렇게 실제 사용하는 유저가 보기에 실제 버튼을 클릭하는 행위가 더 잘 표현되기에 userEvent를 사용하는 것이 더 좋은 방법이다.
