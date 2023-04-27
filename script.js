//your JS code here. If required.
let color_arr=["Red","Green","White","Black"];
let Sel_colorEl=	document.getElementById("colorSelect");

document.getElementById("btn").addEventListener("click" , ()=>{
let Sel_color=Sel_colorEl.value;
	for(let i=0; i< color_arr.length; i++)
		{
			if(color_arr[i]==Sel_color)
			{
				color_arr.splice(i , 1);
			}
		}

	Sel_colorEl.innerHTML="";
	for(let i=0; i< color_arr.length; i++)
		{
			Sel_colorEl.innerHTML+=`<option>${color_arr[i]}</option> `;
		}
})