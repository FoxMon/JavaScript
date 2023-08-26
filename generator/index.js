// Genertor
// 중간에서 멈췄다가 이어서 실행
// function 뒤에 *를 붙여서 표현. 함수 내부에서는 yield 키워드 사용
// 함수 실행 결과에 대해 next() 메소드를 호출할 때 순차적으로
// Generator 함수 내부의 yield 키워드 만나기 전까지 실행.
// yield키워드를 만나면 일시정지
// 다시 next() 메소드 호출 시 그 다음 yield 키워드를 만날 때까지 함수 내부 내용 실행
function* gene() {
  console.log(1);
  yield 1;

  console.log(2);
  yield 2;
}

const gen = gene();

console.log(...gen);

gen.next();
gen.next();
