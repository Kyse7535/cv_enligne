(()=>{"use strict";const e=function(){let e=$("<div></div>").text("");e.attr("id","myMenu"),$(".nav_mobile").append(e);let t=$("<ul></ul>").text(""),n=["accueil","presentation","experiences","competences","contact"];for(let e=0;e<5;e++){let a=$("<li></li>").text(""),i=$("<a></a>").text(n[e]);i.attr("href","#"+n[e]),a.append(i),a.css({"list-style":"none",color:"#fff",padding:"5px 10px","text-align":"center"}),t.append(a)}$("#myMenu").append(t),$("#myMenu").css("display","none")},t=function(){$(".nav_mobile").html("<i class='fas fa-bars fa-2x' > </i>"),$("i").attr("id","hamburger"),$(".nav_mobile").css({padding:"1% 3%","background-color":"#ce93d8","text-align":"right",color:"#fff"})},n=function(){$("#hamburger").click((()=>{$("#myMenu").slideToggle(),$("i").toggleClass("fa-times")}))};$(document).ready((function(){t(),e(),n()}))})();