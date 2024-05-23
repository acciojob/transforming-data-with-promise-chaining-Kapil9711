//your JS code here. If required.
const btn = document.querySelector('#btn');
const input = document.querySelector('#ip');
const output = document.querySelector('#output');


function handleClick(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			output.textContent = input.value;
			resolve(input.value);
		},2000);
})
}


btn.addEventListener('click', ()=>{
  hanldeClick().then(num => output.textContent = num);

}
					);


