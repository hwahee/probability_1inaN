import {Count} from './ProbabilityCount.js'
import {Judge} from './Judge.js'

const judge:Judge=new Judge()
const count:Count=new Count(judge)

console.log("hello")

document.getElementById("setCount")?.addEventListener('click', ()=>{
	const in_n:number=parseInt((document.getElementById("input_n") as HTMLInputElement).value)
	const in_repetition:number=parseInt((document.getElementById("input_repetition") as HTMLInputElement).value)
	judge.set(in_n, in_repetition)
	count.reset(judge)
	const out_n:HTMLInputElement=document.getElementById("output_n") as HTMLInputElement
	const out_repetition:HTMLInputElement=document.getElementById("output_repetition") as HTMLInputElement
	out_n.value=String(in_n)
	out_repetition.value=String(in_repetition)
})

let isRunning:boolean=false
let speed:number=parseInt((document.getElementById("input_speed") as HTMLInputElement).value)
let runner=setInterval(()=>{
	if(isRunning){
		count.run()
		const out_result:HTMLInputElement=document.getElementById("output_result") as HTMLInputElement
		out_result.value=count.getProbability()
	}
}, speed)
document.getElementById("go")?.addEventListener('click', ()=>{isRunning=true})
document.getElementById("stop")?.addEventListener('click', ()=>{
	isRunning=false
	count.reset(judge)
})
document.getElementById("input_speed")?.addEventListener('change', ()=>{
	speed=parseInt((document.getElementById("input_speed") as HTMLInputElement).value)
	clearInterval(runner)
	runner=setInterval(()=>{
		if(isRunning){
			count.run()
			const out_result:HTMLInputElement=document.getElementById("output_result") as HTMLInputElement
			out_result.value=count.getProbability()
		}
	}, speed)
})



