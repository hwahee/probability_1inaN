import { Judge } from './Judge'

class Count {
	result: boolean[] = []
	trial: number = 0
	success: number = 0
	prob:number=0.0
	object?: Judge = undefined
	constructor(obj?:Judge){
		this.object=obj
	}
	reset(obj?:Judge):void{
		if(obj){
			this.object=obj
		}
		this.result=[]
		this.trial=0
		this.success=0
		this.prob=0.0
	}
	rum():void{
		console.log("pirates love")
	}
	run(): void {
		if (this.object === undefined) {
			console.log("OBJECT UNDEFINED")
			return
		}

		this.trial++
		if(this.object.runIfEverSucceed()){
			this.result.push(true)
			this.success++
		}
		else{
			this.result.push(false)
		}

		this.prob=this.success/this.trial
	}
	printObject():void{ this.object?.printStatus()}
	getProbability():string{return `${this.prob}%`}
}

const TRIAL=100000

const cnt:Count=new Count()
const JudgeObject:Judge=new Judge(32, 32)
cnt.reset(JudgeObject)

for(let i:number=0;i<TRIAL;i++){
	cnt.run()
}
console.log(cnt.getProbability())
