// start game script
let name_input = document.getElementById('name-input')
let enter_name_alert =document.getElementById('enter-name-alert')
let user_name =  document.getElementById('user-name')

let first_layer = document.getElementById('first-layer')
let second_layer = document.getElementById('second-layer')
let third_layer = document.getElementById('third-layer')
let fourth_layer = document.getElementById('fourth-layer')

// checkking is user already enter name or not
function game_user_check(){
    if(user_name.innerHTML==""){
        first_layer.style.display="flex"
    }
    else{
        first_layer.style.display="none"
    }
}
game_user_check()

// User name  form validation 
function start_game(){
     if(name_input.value==""){
         enter_name_alert.style="visibility: visible;"
     }
     else{
        enter_name_alert.style="visibility: hidden;"
        first_layer.style.display="none"
        user_name.innerHTML=name_input.value+' <i class="fa fa-gamepad" aria-hidden="true"></i>'
     }
}
// X and O Styling and visiblity
var cross_circle_counter =0
var human_player_sign="✕"
var ai_player_sign="⚪"
var count_clicks =0
// values of score borad
var win_game = 0
var lose_game = 0
var tie_game_both = 0

let win_score_value =document.getElementById('win_score_value')
let lose_score_value =document.getElementById('lose_score_value')
let tie_score_value =document.getElementById('tie_score_value')

let box =document.querySelector('.box')
let box_1 =document.getElementById('box-1')
let box_2 =document.getElementById('box-2')
let box_3 =document.getElementById('box-3')
let box_4 =document.getElementById('box-4')
let box_5 =document.getElementById('box-5')
let box_6 =document.getElementById('box-6')
let box_7 =document.getElementById('box-7')
let box_8 =document.getElementById('box-8')
let box_9 =document.getElementById('box-9')

function human_player(element_name){
    if(element_name.innerHTML==""){
    element_name.innerHTML=human_player_sign
    element_name.style="text-shadow: 0 0 10px rgb(182,37,145) ,0 0 20px rgb(255, 0, 128),0 0 120px rgba(255, 0, 221, 0.445);font-size: 9rem;"
    cross_circle_counter=0
    count_clicks++
    }
}

// Inserting values
box_1.onclick =function(){
      if(box_1.innerHTML==""){
      human_player(box_1)
      ai_player()
      checking_result()
      }
}
box_2.onclick =function(){
      if(box_2.innerHTML==""){
      human_player(box_2)
      ai_player()
      checking_result()
      }
}
box_3.onclick =function(){
      if(box_3.innerHTML==""){
      human_player(box_3)
      ai_player()
      checking_result()
      }
}
box_4.onclick =function(){
      if(box_4.innerHTML==""){
      human_player(box_4)
      ai_player()
      checking_result()
      }
}
box_5.onclick =function(){
      if(box_5.innerHTML==""){
      human_player(box_5)
      ai_player()
      checking_result()
      }
}
box_6.onclick =function(){
      if(box_6.innerHTML==""){
      human_player(box_6)
      ai_player()
      checking_result()
      }
}
box_7.onclick =function(){
      if(box_7.innerHTML==""){
      human_player(box_7)
      ai_player()
      checking_result()
      }
}
box_8.onclick =function(){
      if(box_8.innerHTML==""){
      human_player(box_8)
      ai_player()
      checking_result()
      }
}
box_9.onclick =function(){
      if(box_9.innerHTML==""){
      human_player(box_9)
      ai_player()
      checking_result()
      }
}

// ai player decision and detection
function ai_player_style(ai_box_value){
      ai_box_value.innerHTML=ai_player_sign
      ai_box_value.style="text-shadow: 0 0 10px rgb(0, 153, 255) ,0 0 20px rgb(0, 153, 255),0 0 120px rgb(0, 153, 255);font-size: 9rem; transition-delay: .3s;"
      count_clicks++
}

function ai_player(){

      // first condition
    if(box_1.innerHTML!=="" && count_clicks==1 && box_2.innerHTML==""){
                  ai_player_style(box_2)
       }
       else if(box_2.innerHTML!=="" && count_clicks==1 &&box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_3.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_4.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_5.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_6.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_7.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_8.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }
       else if(box_9.innerHTML!=="" && count_clicks==1 && box_1.innerHTML==""){
          ai_player_style(box_1)
       }

      //  Seccond condition
      else if(box_1.innerHTML==human_player_sign && box_2.innerHTML==human_player_sign && box_3.innerHTML==""){
            ai_player_style(box_3)
      }
      else if(box_4.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_6.innerHTML==""){
            ai_player_style(box_6)
      }
      else if(box_7.innerHTML==human_player_sign && box_8.innerHTML==human_player_sign && box_9.innerHTML==""){
            ai_player_style(box_9)
      }

      else if(box_2.innerHTML==human_player_sign && box_3.innerHTML==human_player_sign && box_1.innerHTML==""){
            ai_player_style(box_1)
      }
      else if(box_5.innerHTML==human_player_sign && box_6.innerHTML==human_player_sign && box_4.innerHTML==""){
            ai_player_style(box_4)
      }
      else if(box_8.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign&& box_7.innerHTML==""){
            ai_player_style(box_7)
      }

      // third condition
      else if(box_1.innerHTML==human_player_sign && box_4.innerHTML==human_player_sign && box_7.innerHTML==""){
            ai_player_style(box_7)
      }
      else if(box_4.innerHTML==human_player_sign && box_7.innerHTML==human_player_sign && box_1.innerHTML==""){
            ai_player_style(box_1)
      }
      else if(box_2.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_8.innerHTML==""){
            ai_player_style(box_8)
      }
      else if(box_5.innerHTML==human_player_sign && box_8.innerHTML==human_player_sign && box_2.innerHTML==""){
            ai_player_style(box_2)
      }
      else if(box_3.innerHTML==human_player_sign && box_6.innerHTML==human_player_sign && box_9.innerHTML==""){
            ai_player_style(box_9)
      }
      else if(box_6.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign && box_3.innerHTML==""){
            ai_player_style(box_3)
      }
      // fourth condition
      else if(box_1.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_9.innerHTML==""){
            ai_player_style(box_9)
      }
      else if(box_5.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign && box_1.innerHTML==""){
            ai_player_style(box_1)
      }
      else if(box_3.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_7.innerHTML==""){
            ai_player_style(box_7)
      }
      else if(box_7.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_3.innerHTML==""){
            ai_player_style(box_3)
      }

      // Fifth condition 
      else if(box_1.innerHTML==human_player_sign && box_7.innerHTML==human_player_sign && box_4.innerHTML==""){
            ai_player_style(box_4)
      }
      else if(box_2.innerHTML==human_player_sign && box_8.innerHTML==human_player_sign && box_5.innerHTML==""){
            ai_player_style(box_5)
      }
      else if(box_3.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign && box_6.innerHTML==""){
            ai_player_style(box_6)
      }
      else if(box_1.innerHTML==human_player_sign && box_3.innerHTML==human_player_sign && box_2.innerHTML==""){
            ai_player_style(box_2)
      }
      else if(box_4.innerHTML==human_player_sign && box_6.innerHTML==human_player_sign && box_5.innerHTML==""){
            ai_player_style(box_5)
      }
      else if(box_7.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign && box_8.innerHTML==""){
            ai_player_style(box_8)
      }

      else if(box_1.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign && box_5.innerHTML==""){
            ai_player_style(box_5)
      }
      else if(box_3.innerHTML==human_player_sign && box_7.innerHTML==human_player_sign && box_5.innerHTML==""){
            ai_player_style(box_5)
      }
      // checking khatarnak mode


      else{
            let random_box_number = Math.floor((Math.random() *9) +1)
            
            if(random_box_number==1 && box_1.innerHTML==""){
                  ai_player_style(box_1)
            }
            else if(random_box_number==2 && box_2.innerHTML==""){
                  ai_player_style(box_2)
            }
            else if(random_box_number==3 && box_3.innerHTML==""){
                  ai_player_style(box_3)
            }
            else if(random_box_number==4 && box_4.innerHTML==""){
                  ai_player_style(box_4)
            }
            else if(random_box_number==5 && box_5.innerHTML==""){
                  ai_player_style(box_5)
            }
            else if(random_box_number==6 && box_6.innerHTML==""){
                  ai_player_style(box_6)
            }
            else if(random_box_number==7 && box_7.innerHTML==""){
                  ai_player_style(box_7)
            }
            else if(random_box_number==8 && box_8.innerHTML==""){
                  ai_player_style(box_8)
            }
            else if(random_box_number==9 && box_9.innerHTML==""){
                  ai_player_style(box_9)
            }
            else{
                  if(box_1.innerHTML==""){
                        ai_player_style(box_1)
                  }
                  else if(box_2.innerHTML==""){
                        ai_player_style(box_2)
                  }
                  else if(box_3.innerHTML==""){
                        ai_player_style(box_3)
                  }
                  else if(box_4.innerHTML==""){
                        ai_player_style(box_4)
                  }
                  else if(box_5.innerHTML==""){
                        ai_player_style(box_5)
                  }
                 else  if(box_6.innerHTML==""){
                        ai_player_style(box_6)
                  }
                  else if(box_7.innerHTML==""){
                        ai_player_style(box_7)
                  }
                  else if(box_8.innerHTML==""){
                        ai_player_style(box_8)
                  }
                  else if(box_9.innerHTML==""){
                        ai_player_style(box_9)
                  }
                  ("work")
            }
            
      }

}











function checking_result(){
      // check X player player win or not
      if(box_1.innerHTML==human_player_sign && box_2.innerHTML==human_player_sign && box_3.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_4.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_6.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_7.innerHTML==human_player_sign && box_8.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign){
            win_human_player()
      }

      else if(box_1.innerHTML==human_player_sign && box_4.innerHTML==human_player_sign && box_7.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_2.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_8.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_3.innerHTML==human_player_sign && box_6.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_1.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_9.innerHTML==human_player_sign){
            win_human_player()
      }
      else if(box_3.innerHTML==human_player_sign && box_5.innerHTML==human_player_sign && box_7.innerHTML==human_player_sign){
            win_human_player()
      }


      // Check ai player is win or not
      else if(box_1.innerHTML==ai_player_sign && box_2.innerHTML==ai_player_sign && box_3.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_4.innerHTML==ai_player_sign && box_5.innerHTML==ai_player_sign && box_6.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_7.innerHTML==ai_player_sign && box_8.innerHTML==ai_player_sign && box_9.innerHTML==ai_player_sign){
            win_ai_player()
      }

      else if(box_1.innerHTML==ai_player_sign && box_4.innerHTML==ai_player_sign && box_7.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_2.innerHTML==ai_player_sign && box_5.innerHTML==ai_player_sign && box_8.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_3.innerHTML==ai_player_sign && box_6.innerHTML==ai_player_sign && box_9.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_1.innerHTML==ai_player_sign && box_5.innerHTML==ai_player_sign && box_9.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else if(box_3.innerHTML==ai_player_sign && box_5.innerHTML==ai_player_sign && box_7.innerHTML==ai_player_sign){
            win_ai_player()
      }
      else{
            tie_game()
      }
}

function win_human_player(){
      ("player X is win")
      win_game++
      win_score_value.innerHTML=win_game
      second_layer.style.display="flex"
}
function win_ai_player(){
      ("player O is win")
      lose_game++
      lose_score_value.innerHTML=lose_game
      third_layer.style.display="flex"
}
function tie_game(){
      if(count_clicks==9){
      ("Game Is Tie")
      tie_game_both++
      tie_score_value.innerHTML=tie_game_both
      fourth_layer.style.display="flex"
      }
}

// on click ok close 
function close_win_layer(){
      second_layer.style.display="none"
      reset_game()
}
function close_lose_layer(){
      third_layer.style.display="none"
      reset_game()
}
function close_tie_layer(){
      fourth_layer.style.display="none"
      reset_game()
}

// reset game function
function reset_game(){
      box_1.innerHTML=""
      box_2.innerHTML=""
      box_3.innerHTML=""
      box_4.innerHTML=""
      box_5.innerHTML=""
      box_6.innerHTML=""
      box_7.innerHTML=""
      box_8.innerHTML=""
      box_9.innerHTML=""

      box_1.style="font-size:0rem;"
      box_2.style="font-size:0rem;"
      box_3.style="font-size:0rem;"
      box_4.style="font-size:0rem;"
      box_5.style="font-size:0rem;"
      box_6.style="font-size:0rem;"
      box_7.style="font-size:0rem;"
      box_8.style="font-size:0rem;"
      box_9.style="font-size:0rem;"


      count_clicks=0
      cross_circle_counter=0
}