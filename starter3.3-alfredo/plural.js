var player1 = 0; // these var stores the points of each player
var player2 = 0;
var player3 = 0;
var acertosP1 = 0; // stores partial score until you have got 4 correct answers
var acertosP2 = 0;
var acertosP3 = 0;
var whogoesnow = ""; //writes in the text are who is playing
var t = 0; // controls whose turn is it now
var name1 = ""; // names of the players vbxvbxvcbxfadfasdfasdfdfasdfasdcx\cxc
var name2 = "";
var name3 = "";

var line = 6; // It is a 5 x 5 matrix....
var col = 6;
var btn_clicked = null;


// if you change "line" and "col" you have to change btns, verb[][], Solution[][], empty[][], count_down 
function makeArray2(x, y) {
    var count;
    this.length = x;
    for (var count = 0; count <= (x - 1); count++)
    this[count] = makeArray(y);
}

function makeArray(numElementos) {
    var count;
    var arranjo = new Array(numElementos);
    for (count = 0; count <= (numElementos - 1); count++) {
        arranjo[count] = 0;
    }
    return (arranjo);

}

var verb = new makeArray2(line, col);
loadArrayVerb();

function loadArrayVerb() {
verb[0][0] = "teacher";
verb[0][1] = "actor";
verb[0][2] = "actress";
verb[0][3] = "businessman";
verb[0][4] = "student";
verb[0][5] = "pen";
verb[1][0] = "book";
verb[1][1] = "picture";
verb[1][2] = "page";
verb[1][3] = "pair";
verb[1][4] = "country";
verb[1][5] = "city";
verb[2][0] = "car";
verb[2][1] = "president"
verb[2][2] = "waiter"
verb[2][3] = "waitress"
verb[2][4] = "number"
verb[2][5] = "mistake";
verb[3][0] = "man"
verb[3][1] = "bus"
verb[3][2] = "taxi"
verb[3][3] = "house"
verb[3][4] = "woman"
verb[3][5] = "child";
verb[4][0] = "shop"
verb[4][1] = "university"
verb[4][2] = "vegetable"
verb[4][3] = "sandwich"
verb[4][4] = "bank"
verb[4][5] = "baby";
verb[5][0] = "businesswoman"
verb[5][1] = "park"
verb[5][2] = "river"
verb[5][3] = "lake"
verb[5][4] = "school"
verb[5][5] = "tree";
}

var Solution = new makeArray2(line, col);
loadArraySolution();

function loadArraySolution() {
Solution[0][0] = "s";
Solution[0][1] = "s";
Solution[0][2] = "es";
Solution[0][3] = "i";
Solution[0][4] = "s";
Solution[0][5] = "s";
Solution[1][0] = "s";
Solution[1][1] = "s";
Solution[1][2] = "s";
Solution[1][3] = "s";
Solution[1][4] = "ies";
Solution[1][5] = "ies";
Solution[2][0] = "s";
Solution[2][1] = "s"
Solution[2][2] = "s"
Solution[2][3] = "es"
Solution[2][4] = "s"
Solution[2][5] = "s";
Solution[3][0] = "i"
Solution[3][1] = "es"
Solution[3][2] = "s"
Solution[3][3] = "s"
Solution[3][4] = "i"
Solution[3][5] = "i";
Solution[4][0] = "s"
Solution[4][1] = "ies"
Solution[4][2] = "s"
Solution[4][3] = "es"
Solution[4][4] = "s"
Solution[4][5] = "ies";
Solution[5][0] = "i"
Solution[5][1] = "s"
Solution[5][2] = "s"
Solution[5][3] = "s"
Solution[5][4] = "s"
Solution[5][5] = "s";
}


function disableBtns(file)
{

                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            thebtn.disabled=true;
                        }
                    }
    document.tictac.player1_name.select();
    document.tictac.player2_name.select();
    document.tictac.player3_name.select();
}
function addClass(element, classToAdd) {
    var currentClassValue = element.className;
      
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
 
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
 
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
 
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
 
    element.className = filteredList.join(" ");
}
function checkColor(btn)
{
var nome = btn.className;
var nameColor = "default";
    if ((nome.indexOf("btn-success") >= 0)){
        nameColor = "success";
        }
    if ((nome.indexOf("btn-primary") >= 0)){
        nameColor = "primary";
        }
    if ((nome.indexOf("btn-warning") >= 0)){
        nameColor = "warning";
        }        

return(nameColor);    
}

function changeColor(obj, cc)
{
	/*var nome = obj.className;
     if ((nome.indexOf('btn-primary') >= 0))
          {
          removeClass(obj,'btn-primary');
          } */  
   var newColor = ('btn-' + cc);
   addClass(obj, newColor);
}
function isNotDead(thebtn) {

if ((thebtn.value !=="  X  ")&&(thebtn.value !=="  0  ")&&(thebtn.value !=="  |  ")&&(thebtn.value !== 'XXXX')&&(thebtn.value !== 'OOOO')&&(thebtn.value !== '||||')&&(thebtn.value !== '*****'))
           {
				return true;
			   }
            else{//notDead = false;
			   return false;
			   }

}
function isDead(thebtn) {
if ((thebtn.value == "  X  ")||(thebtn.value == "  0  ")||(thebtn.value == "  |  ")||(thebtn.value == 'XXXX')||(thebtn.value == 'OOOO')||(thebtn.value == '||||')||(thebtn.value == '*****'))
           {
			return true;			   
			}
            else{//dead = false;
    			return false;			   
			   }

}
function checkIfThereAreNeighbors(i,j)
{
var thereAre = false;
    if ((i + 1) < line) {  // 6 o'clock
	ii=i+1;
        id = ('btn-' + ii + j);
        var thebtn_s = document.getElementById(id);
        if (isNotDead(thebtn_s))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((i - 1) >= 0) {
	ii=i-1;
        id = ('btn-' + ii + j);
        var thebtn_n = document.getElementById(id);
        if (isNotDead(thebtn_n))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((j + 1) < col) {
	jj=j+1;
        id = ('btn-' + i + jj);
        var thebtn_e = document.getElementById(id);
        if (isNotDead(thebtn_e))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((j - 1) >= 0) {
	jj=j-1;
        id = ('btn-' + i + jj);
        var thebtn_w = document.getElementById(id);
        if (isNotDead(thebtn_w))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
return(thereAre);
    
}



function highLight(i,j,c) 
{

    var newColor = ('btn' + c);
    if ((i + 1) < line) {  // 6 o'clock
	ii=i+1;
        id = ('btn-' + ii + j);
        var thebtn_s = document.getElementById(id);
        var obj_color = checkColor(thebtn_s);
          if (isNotDead(thebtn_s))
           {
    			if (obj_color !== c){changeColor(thebtn_s,c);}
			   }
            else{
					 if (isDead(thebtn_s))                
                {
                thebtn_s.disabled=true;
                }
    }
 }
    if ((i - 1) >= 0) {
	ii=i-1;
        id = ('btn-' + ii + j);
        var thebtn_n = document.getElementById(id);
        var obj_color = checkColor(thebtn_n);
          if (isNotDead(thebtn_n))
           {
    			if (obj_color !== c){changeColor(thebtn_n,c);}
			   }
            else{
					 if (isDead(thebtn_n))                
                {
                thebtn_n.disabled=true;
                }
    }
 }
    if ((j + 1) < col) {
	jj=j+1;
        id = ('btn-' + i + jj);
        var thebtn_e = document.getElementById(id);
        var obj_color = checkColor(thebtn_e);
          if (isNotDead(thebtn_e))
           {
    			if (obj_color !== c){changeColor(thebtn_e,c);}
			   }
            else{
					 if (isDead(thebtn_e))                
                {
                thebtn_e.disabled=true;
                }
    }
 }
    if ((j - 1) >= 0) {
	jj=j-1;
        id = ('btn-' + i + jj);
        var thebtn_w = document.getElementById(id);
        var obj_color = checkColor(thebtn_w);
          if (isNotDead(thebtn_w))
           {
    			if (obj_color !== c){changeColor(thebtn_w,c);}
			   }
            else{
					 if (isDead(thebtn_w))                
                {
                thebtn_w.disabled=true;
                }
    }
 }
    
    
}

function turnonNeighbors()
{
var c = 'default';

    if (t == 1)
             {label_btn = "  X  " ;c = 'success';}
             else{
                 if (t==0) 
                     {label_btn = "  0  ";c = 'primary';}                    
                     else {label_btn = "  |  ";c = 'warning';}
                 }
                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
									                             
                            id = ('btn-' + x + y);
					        var thebtn = document.getElementById(id);
                            if (thebtn.value == label_btn)
                               {
                               highLight(x,y,c);
                               }

                            } // for y
                    } //for x
enableAdjacent(c);
}



function reset_vars(p) {
    if (p == 1) 
       {
        acertosP1 = 0;
       } else {
    	     if (p == 2)
    	        {
              acertosP2 = 0;
                }
              else {
                   acertosP3 = 0;
                   }
    }

}



function updateScore(file, p1) {
    if (p1 == 1) {
        player1++;
    } else {
    	      if (p1 == 2)
    	         {
                player2++;
               }
               else{
                   player3++;
                   }
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;
    file.player3.value = ':' + player3;
}


function is_Blocked(cor) 
{
  var noWayOut = false;
    switch(cor) 
              {
              case "success":
              tag = "  X  ";
              break;
              case "primary":
              tag = "  0  ";
              break;
              case "warning":
              tag = "  |  ";
              break;
              default:
              tag = "default";
              }

                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            var n_class = ('btn-' + cor);
                            //alert ('checking ' + thebtn.id + ' class= '+ nome + 'checking cor= '+ n_class);
                            if ((nome.indexOf(n_class) >= 0)&&(thebtn.value == tag))
                               {
                               	//alert ('checkin btn com tag = ' + thebtn.value);
                               	hasNeighbors = checkIfThereAreNeighbors(x,y); 
                               	if (hasNeighbors==true)
                               	   {
                               	   	//alert ('tem neighbours');
                               	   	noWayOut = false;
                               	    //alert ('leaving the function isBlocked -> noWayOut = '+ noWayOut + ' / ' + thebtn.id);
                               	    return(noWayOut);
                               	   }
                               	   else {
                               	   	    noWayOut = true;
                               	        }
                               }

                            } // for y
                    } //for x

//alert ('testando se o laco completou '+ noWayOut + ' / ' + thebtn.id);
return(noWayOut);
}

function mark_blocked(color) {

    if (color == 'success') {
        key = "  X  ";
        idNum = 1;
    } else 
          {
          	if (color == 'primary')
          	{
          	key = "  0  ";
          	idNum = 2;
          	}
          	else {
          		key = "  |  ";
                idNum = 3; 
                 }
        
    }
    var numAcertos = eval("acertosP" + idNum);
    for (x = 0; x < line; x++) {

        for (y = 0; y < col; y++) {
            id = ('btn-' + x + y);
			var thebtn = document.getElementById(id);
            
            if (thebtn.value == key) 
               {
                thebtn.value = "*****";
                thebtn.disabled = true;                
                numAcertos = 0;
                }


        }
    }

}

function turnchange() 
{
	var headerPname = document.getElementById('header_player');
	file = document.tictac;
    if ( t == 1) {
        t = 2;
        nameplayernow = name3;
        acertosP = acertosP3;
        file.player3_name.select();
        headerPname.innerHTML = name3;
    } else {  
           if (t==0)
				  {			        
		        t = 1;
              nameplayernow = name1;
              acertosP = acertosP1;
              file.player1_name.select();
              headerPname.innerHTML = name1;
                  }
                  else {
              	       t = 0;
                       nameplayernow = name2;
                       acertosP = acertosP2;
                       file.player2_name.select();
                       headerPname.innerHTML = name2;
              	       }
    }
  
    sweepGrid();

    if (acertosP > 0) {turnonNeighbors();}
    
        
    return (t);
}


function gameOver(file) {
    if (player1 > player2) {
        alert(" Game Over !" + name1 + " is the winner");
        return;
    }
    if (player1 < player2) {
        alert(" Game Over !" + name2 + " is the winner");
        return;
    }
    alert(" This is the end! No winner");

}

function changeAll(file) {
    var start = document.getElementById('st');
    start.disabled=true;
    rdn = Math.random();

    var headerPname = document.getElementById('header_player');
    for (i = 0; i < line; i++) {
        for (j = 0; j < col; j++) {
            id = ('btn-' + i + j);
            var thebtn = document.getElementById(id);
            thebtn.value=verb[i][j];
            thebtn.disabled = false;
        }
    }
    name1 = file.player1_name.value;
    name2 = file.player2_name.value;
    name3 = file.player3_name.value;

    if (rdn <= .3) {


        headerPname.innerHTML = name1;
        file.player1_name.disabled = true;
        file.player1_name.select();
        file.player2_name.disabled = true;
        file.player3_name.disabled = true;
        t=1;
    } else {
        if ((rdn > .3 ) && (rdn<= .7))
        {


            headerPname.innerHTML = name2;
            file.player1_name.disabled = true;
            file.player2_name.disabled = true;
            file.player2_name.select();
            file.player3_name.disabled = true;
            t=0;
        }
        else {


            headerPname.innerHTML = name3;
            file.player1_name.disabled = true;
            file.player2_name.disabled = true;
            file.player3_name.disabled = true;
            file.player3_name.select();
            t=2;
        }
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;
    file.player3.value = ':' + player3;

    var radioButtonContainer = document.getElementById('radioButtonContainer');
    radioButtonContainer.style.display = 'none';
    var invisiblePar = document.getElementById('invisiblePar');
    invisiblePar.style.display = '';


}




function enableAdjacent(cor)
{
//var thereIsFreeAdj=false;
                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            var n_class = ('btn-' + cor );
                            if (isDead(thebtn)) 
                               {
                               								       
								       thebtn.disabled=true; 
                                }else{
													//alert('thebtn '+thebtn.value + ' is not dead');                                      
                                      if ((nome.indexOf(n_class) >= 0))
                                         {
                                         thebtn.disabled=false;
										// thereIsFreeAdj=true;	                                         
                                         }
                                         else {
                                              thebtn.disabled=true;
                                              }	                               
                                     }

                            } // for y
                    } //for x
//return(thereIsFreeAdj);
}

function sweepGrid() 
{
// this function "turns off" all the neighbours for both players 

                    for (x = 0; x < line; x++) 
                     {
                        for (y = 0; y < col; y++) 
                          {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            if (isDead(thebtn)) 
                               {
								thebtn.disabled = true;								       
								}else{									       
								      thebtn.disabled = false; 
                                     //alert (thebtn.id + 'abilitado');
                                     if ((nome.indexOf('btn-success') >= 0))
                                                      {
                                                      removeClass(thebtn,'btn-success');
                                                      }
                                     if ((nome.indexOf('btn-primary') >= 0))
                                                      {
                                                      removeClass(thebtn,'btn-primary');
                                                      }
                                     if ((nome.indexOf('btn-warning') >= 0))
                                                      {
                                                      removeClass(thebtn,'btn-warning');
                                                      }                     
                                     }

                            }//for
                     }//for
}
function computeAnswer(obj,i,j,resp) 
{
var acertosNext = 0;
var acertosLast = 0;
var next = 0;
var last = 0;
/* if resp is correct ->
   compute points ....update acertosP1 or acertosP2
   change label ....label = X or 0
   change color .....addClass -> green or blue button
   highLight ......highLight only the adjacent button
   else 
   	the answer is incorrect .......
   	change turn ........
*/ 
var file = document.tictac;
    if (t == 1) {
        me = 1;
        next = 3;
        last = 2;
        tMe = 1;
        tNext = 2;
        tLast = 0;
        //name = name1;
        btn_color = 'success';
        label_acerto = "  X  ";
        label_row = 'XXXX';
        label_empty_temp = 1;
        label_empty = 'x';
        nextColor = 'warning';
        acertosNext = acertosP3;
        lastColor = 'primary';
        acertosLast = acertosP2;
    } else {
    	      if (t == 0)
				{                
                me = 2;
                next = 1;
                last = 3;
					 tMe = 0;
                tNext = 1;
                tLast = 2;                
                //name = name2;
                btn_color = 'primary';
                label_acerto = "  0  ";
                label_row = 'OOOO';
                label_empty_temp = 0;
                label_empty = 'O';
                nextColor = 'success';
				acertosNext = acertosP1;
                lastColor = 'warning';
                acertosLast = acertosP3;
                }
                else {
                     me = 3;
                     next = 2;
                     last = 1;
							tMe = 2;
                     tNext = 0;
                     tLast = 1;                
                     
                     //name = name3;
                     btn_color = 'warning';
                     label_acerto = "  |  ";
                     label_row = '||||';
                     label_empty_temp = 2;
                     label_empty = 'i';
                     nextColor = 'primary';
                     acertosNext = acertosP2;
                     lastColor = 'success';
                     acertosLast = acertosP1;
                     }
    }

	
    if (resp.toLowerCase() == Solution[i][j]) 
      {

            
            xo = label_acerto;

            if (t == 1) 
               {
				acertosP1++;                
                acertosP = acertosP1;
               } else {
               	      if (t==0)
                         {
					     acertosP2++;                
                         acertosP = acertosP2;
                         }
                         else {
                         	  acertosP3++;
                         	  acertosP = acertosP3;
                              }
                      }        
            btn_clicked.value = xo;
            btn_clicked.disabled=true;
            changeColor(btn_clicked,btn_color);

            highLight(i,j,btn_color);
            enableAdjacent(btn_color);

            var imStuck = is_Blocked(btn_color);
            var nextStuck = is_Blocked(nextColor);
            var lastStuck = is_Blocked(lastColor);
           
            if ((imStuck == true)&&(acertosP < 4)) 
               {
                var name = eval('name' + me);
                alert(name + ' You are  blocked');
                mark_blocked(btn_color);
                reset_vars(me);
                t = turnchange();
               } 
            if ((nextStuck == true)&&(acertosNext > 0)) 
               {
               var name = eval('name' + next);
               alert(name + ' You are  blocked');
               mark_blocked(nextColor);
               reset_vars(next);
               if (t== tNext) {turnchange();}              
               }
            if ((lastStuck == true)&&(acertosLast > 0)) 
               {
               	var name = eval('name' + last);
               	alert(name + ' You are  blocked');
                mark_blocked(lastColor);
                reset_vars(last);
                if (t== tLast) {turnchange();}
               }               
            if (acertosP == 4) 
               {
               computeScore();
               updateScore(file, me);
               reset_vars(me)
               t = turnchange();               
               }
      }// if resp == solution
      else // the resp is incorrect
      {
      alert("Sorry!!! Incorrect answer ");

      t = turnchange();
      }
      	
}
function computeScore()
{
    if (t == 1) {
        me = 1;
        op = 2;
        btn_color = 'success';
        label_acerto = "  X  ";
        label_row = 'XXXX';
        label_empty_temp = 1;
        label_empty = 'x';
    } else {
    	      if (t == 0)
				    {                
                me = 2;
                op = 1;
                btn_color = 'primary';
                label_acerto = "  0  ";
                label_row = 'OOOO';
                label_empty_temp = 0;
                label_empty = 'O';
                }
                else {
                     me = 3;
                     op = 1;
                     btn_color = 'warning';
                     label_acerto = "  |  ";
                     label_row = '||||';
                     label_empty_temp = 2;
                     label_empty = 'i';
                     }
    }
                    for (x = 0; x < line; x++) 
                        {
                        for (y = 0; y < col; y++) 
                            {
                            id = ('btn-' + x + y);
							       var thebtn = document.getElementById(id);
                            if (thebtn.value == label_acerto) 
                               {
                                thebtn.value = label_row;
                                thebtn.disabled = true;
                                //removeClass(thebtn, "green_button");
                				     //addClass(thebtn, "dark_button");
                               }
                            }
                        }    
}

function change_b(file, i, j, k) {

id = ('btn-' + i + j);
var thebtn = document.getElementById(id);
btn_clicked = thebtn;

var invisiblePar = document.getElementById('invisiblePar');
invisiblePar.style.display = 'none';
var questionTxt = document.getElementById('question');
questionTxt.innerHTML = '' ;
var radioButtonContainer = document.getElementById('radioButtonContainer');
radioButtonContainer.style.display = '';

questionTxt.innerHTML +=  'What is the sound of ed for ' + verb[i][j] + '?'; 

}
function check(ans)
{
	var id_of_bt = btn_clicked.id;
	var arrayChars = id_of_bt.split("");
   var questionTxt = document.getElementById('question');
   questionTxt.innerHTML = '' + "<br>" ;
	computeAnswer(btn_clicked, parseInt(arrayChars[4]), parseInt(arrayChars[5]), ans);
    var radioButtonContainer = document.getElementById('radioButtonContainer');
    radioButtonContainer.style.display = 'none';
    var invisiblePar = document.getElementById('invisiblePar');
    //invisiblePar.innerHTML = <p><br><br></p>
    invisiblePar.style.display = '';

}
function change_bkg()
{
if (document.body.background == "mindmap-black.png") 
   {
    document.body.background = "mindmap-black-canvas.png";
   }
   else {
    document.body.background = "mindmap-black.png";
   }

}