
function takelvl(v){
          sessionStorage.setItem("lvl",v); 
         }

//window.refresh = function() {
//    alert("Hello");
//  document.location.href = "index.html";  
//}

window.onload = function(){
    
//    if(document.location.href == "index.html"){
//    alert("я тут");
//}
//    if (sessionStorage.getItem("is_reloaded")) {
//	alert('Страница перезагружена')
//}
//    sessionStorage.setItem("is_reloaded", true);
   // document.location.href = "index.html";
    //document.getElementById("knopka").hidden='true';
    
    
    if(sessionStorage.getItem('MapLevel')!=null){
        var map = sessionStorage.getItem('MapLevel');
        document.getElementById("map").src = map; 
        
           for(var i = 1; i < Number(sessionStorage.getItem("access"))+1; i++){
            document.getElementById("lvl"+i).href="scotland.html";
        } 
      //  }
        
        
    }   
}



var data_array = [
      ["What street runs from Edinburgh Castle to Holyrood Palace?","a) Princess Street ","b) The Royal Mile ","c) Dunbar Close","d) Mary King’s Close",2],
	  ["What was the name of the infamous battle that took place in 1746?","a) The Battle of Killecrankie","b) The Battle of Culloden","c) The Battle of Preston Pans","d) The Battle of the Stirling Bridge",1],
	  ["Fromwhich country did Bonnie Prince Charlie come to Scotland?","a) Denmark","b) Ireland","c) England","d) France", 4],
	  ["What is Edinburgh Castle built on?","a) an underground car-park","b) a mountain","c) a hill","d) an extinct volcano",4],
	  ["Loch Ness is known all over the world for what supposedly lurking in its waters?","a) The Loch Ness Monster","b) Sharks","c) Lesser-spotted red-tailed salmon","d) A swimming werewolf",1],
	  ["What stood on the site of the heart-shaped mosaic (the Heart of Midlothean) built into the pavement in the High Street section of the Royal Mile in Edinburgh?","a) a church","b) a pagan sanctuary","c) a prison","d) a royal residence",3],
	  ["Scotland's national flag consists of a white cross on a blue background, and is dedicated to which person, the country's patron saint?","a) St Andrew","b) St George","c) St Patrick","d) St David",1],
	];

var cur_answer = getRandomInt(0,data_array.length);
       
	document.getElementById('option1').innerHTML=data_array[cur_answer][1];
	document.getElementById('option2').innerHTML=data_array[cur_answer][2];
	document.getElementById('option3').innerHTML=data_array[cur_answer][3];
	document.getElementById('option4').innerHTML=data_array[cur_answer][4];
	document.getElementById('question').innerHTML=data_array[cur_answer][0];


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
} 

var counter = 0;

		
	function check(num){
 // alert(data_array[cur_answer][5]);
        counter = counter+1;  
			if((counter==1) && (num ==  data_array[cur_answer][5])){
               // document.getElementsByClassName("answer").addEventListener('click', function () { return false; });
                
                var str1 = sessionStorage.getItem("MapLevel");
                var str2 = sessionStorage.getItem("lvl");
                var str3 = sessionStorage.getItem("access");
                var number = 0;
                number =Number(sessionStorage.getItem("lvl")) + 1;               
                 // доступность к уровню
               
                if((sessionStorage.getItem('MapLevel') == null) || (Number(str2)>=Number(str1[6]))){
                   sessionStorage.setItem("MapLevel","maplvl"+sessionStorage.getItem("lvl")+".jpg"); 
                } // меняет фотку
                
                if((sessionStorage.getItem('access') == null) || (Number(str2)==Number(str3))){
                   sessionStorage.setItem("access",Number(sessionStorage.getItem("lvl")) + 1); 
                }
                
                document.getElementById('option'+data_array[cur_answer][5]).style.color="green"; // делает ответ зеленым
                   
                       
			}else{
                if(counter==1){
                   document.getElementById('option'+num).style.color='red';
                document.getElementById('option'+data_array[cur_answer][5]) .style.color="green"; 
                }
               // document.getElementsByClassName("answer").addEventListener('click', function () { return false; });
                
			}
    }
 
