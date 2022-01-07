
    window.addEventListener('load', () => {
        const button = document.querySelector('#pdf');
        button.addEventListenter('click', () => {
            document.querySelector('#enter').value = "";
        });
    }); 

$(document).ready(()=>
        {
            alert("LOG IN  our Construction Industry Management ")
            $('#pdf').on('click', () =>
            {
                $('#enter').val("");
            })
        });
		
		
		
function fun(){

let Name=f1.Name.value;
	if(Name==""){
		alert("Plz Enter name...");
		return false;
	}
	



let email=f1.email.value;
	if(email==""){
		alert("Plz Enter emailid...");
		return false;
	}
	
	if(email.charAt(email.length-3)!="." && email.charAt(email.length-4)!="."){
	
		alert("enter valid email id..");
		return false;
	}
	
}