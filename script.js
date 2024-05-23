//your JS code here. If required.
const btn = document.querySelector('#btn');
const input = document.querySelector('#ip');
const output = document.querySelector('#output');
let message = `Result: `


function handleClick(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(Number(input.value));
		},2000);
})
}


btn.addEventListener('click', ()=>{
  handleClick().then(num => {
	       output.textContent = message + num
	  return new Promise((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve(num);
		  },2000);
	  }) 
  }).then(num =>{
	  num *= 2;
	  output.textContent = message + num;
	  return new Promise ((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve(num);
		  },1000)
	  })
	  
  }).then(num =>{
	  num -= 3;
	  output.textContent = message + num;
	  return new Promise ((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve(num);
		  },1000)
	  })
	  
  }).then(num =>{
	  num /= 2;
	  output.textContent = message + num;
	  return new Promise ((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve(num);
		  },1000)
	  })
	  
  }).then(num =>{
	  num += 10;
	  output.textContent = message + num;
	  return new Promise ((resolve,reject)=>{
		  setTimeout(()=>{
			  resolve(num);
		  },1000)
	  })
	  
  }).then(num => output.textContent = `Final Result: ${num}`);
	

});


