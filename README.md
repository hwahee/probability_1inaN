# N/1 확률을 N번 시행했을 때
### 한 번이라도 될까?

## 기획 의도
- 몬스터에게서 n분의 1 획률로 드랍되는 아이템을 수집하기 위해서 n 마리의 온스터를 잡으면 될까?
- n마리 이하의 몬스터를 죽였을 때 아이템을 얻었으면 성공, 아니면 실패로 정의하고 그것을 반복적으로 실행했을 때 몇 %의 확률로 수렴할까?

## 컴포넌트
- RandomGenerator: min과 max가 정의되면 [min, max)의 값을 지속적으로 생산함

- Judge: n/분의 1확률을 repetition번 반복할 때 n과 repetition을 정의
	- run: number, repetition번 무조건 실행하여 총 몇 번 성공하는지
	- runIfEverSucceed: boolean, repetition번 반복하는 중 1번이라도 성공하면 true, 한 번도 싱공 못하면 false

- Count: Judge를 소유, 그것을 여러 번 실행하면서 통계를 저장함