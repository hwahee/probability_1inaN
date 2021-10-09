export class RandomGenerator {
	constructor(private min: number=0, private max: number=0) {
		if (max < min) {
			this.min ^= this.max ^= this.min ^= this.max
		}
	}
	set(min: number, max: number): void {
		this.min = min, this.max = max
		if (max < min) {
			this.min ^= this.max ^= this.min ^= this.max
			console.log(`Range reversed`)
		}
		console.log(`Generator set: [${this.min},${this.max})`)
	}
	get(): number {
		const diff = this.max - this.min
		let ret: number = Math.floor(Math.random() * diff) + this.min
		return ret
	}
}
