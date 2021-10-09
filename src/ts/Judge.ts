import {RandomGenerator} from "./RandomGenerator.js"

export class Judge {
	constructor(private n: number = 0, private repetition: number = 1) { }
	set(n: number, repetition: number): void {
		this.n = n
		this.repetition = repetition
		console.log("Judgement set to:")
		this.printStatus()
	}
	printStatus(): void {
		let nth: string = `${this.n}th`
		if (this.n % 10 in [1, 2, 3]) {
			if (this.n % 100 == 11 || this.n % 100 == 12) {
				nth = `${this.n}th`
			}
			else {
				if (this.n % 10 == 1) {
					nth = `${this.n}st`
				}
				else if (this.n % 10 == 2) {
					nth = `${this.n}nd`
				}
				else if (this.n % 10 == 3) {
					nth = `${this.n}rd`
				}
			}
		}
		else {
			nth = `${this.n}th`
		}
		console.log(`Prbability: one ${nth}\nrepetition: ${this.repetition}`)
	}
	run(): number {
		//정해진 횟수만큼 돌려서 몇 번 성공하는지
		let count: number = 0
		const gen: RandomGenerator = new RandomGenerator(0, this.n)
		for (let i: number = 0; i < this.repetition; i++) {
			if (!gen.get()) {
				count++
			}
		}
		return count
	}
	runIfEverSucceed(): boolean {
		//정해진 횟수 동안 한 번이라도 성공하는지
		const gen: RandomGenerator = new RandomGenerator(0, this.n)
		for (let i: number = 0; i < this.repetition; i++) {
			if (!gen.get()) {
				return true
			}
		}
		return false
	}
}
