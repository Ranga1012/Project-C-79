menu_list_array = ["Chicken Tandoori Pizza", "Deluxe Veg Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza","Veg Magherita Pizza","Veg Supreme Pizza",""];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i = 0 ; i < menu_list_array.length ; i++){
            htmldata = htmldata + menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata = menu_list_array;
        for(var i=0;i<menu_list_array.length;i++){
            htmldata = htmldata + imgtags + menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
