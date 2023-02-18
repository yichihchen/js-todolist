"use strict";

var data = [];
var listInput = document.querySelector(".button-add");
var txt = document.querySelector(".txt"); //innerHTML要加到ul內，故要設定

var cardCheck = document.querySelector(".card-check"); //加總totalList及清除完成項目需要宣告

var sumList = document.querySelector(".list-footer"); //清除所有已辦事項

var doneDelete = document.querySelector(".delete-list"); //計算待完成事項

var waittodo = document.querySelector(".waittodo"); //全部,待完成,已完成書籤

var all = document.querySelector(".all");
var incomplete = document.querySelector(".incomplete");
var done = document.querySelector(".done"); //宣告checkbox

var checkbox = document.querySelectorAll(".checkbox"); //新增待辦--不會動==

listInput.addEventListener("click", function (e) {
  if (txt.value == "") {
    //沒輸入字要提醒
    alert("請輸入訊息");
    return;
  } else {
    //把輸入欄的資料推到data內
    var object = {};
    object.content = txt.value;
    data.push(object); //要加index是因為後續要刪除待辦

    var string = '';
    data.forEach(function (item, index) {
      //原本let string = ''; 的位置，主控台一直說string is not defined
      string += "<li ><label class=\"checkbox-content\">\n      <input type=\"checkbox\" class=\"checkbox\" data-num=\"".concat(index, "\" onclick=\"changeItemStatus(this)\"><span class=\"checkbox-check\"> ").concat(item.content, " </span>\n    </label> <a href=\"#\" class=\"delete\"></a></li>"); //原本cardCheck.innerHTML = string;的位置，但一直沒辦法持續新增，只能新增第一項
    }); // cardCheck.innerHTML = string;

    cardCheck.innerHTML = string;
  }
}); //刪除待辦功能
//監聽範圍在ul(擴大監聽範圍) //改成監聽delete試看看能不能動

cardCheck.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    return;
  } else {
    //問題在於他一直以為是第0筆的data-num,所以data-num要放在有點即刪除的位置(a標籤)，才會刪到你點的那筆，不然會一直只刪第一筆
    var number = e.target.getAttribute("data-num");
    data.splice(number, 1);
    var string = '';
    data.forEach(function (item, index) {
      string += "<li><label class=\"checkbox-content\">\n      <input type=\"checkbox\" class=\"checkbox\" data-num=\"".concat(index, "\" onclick=\"changeItemStatus(this)\"><span class=\"checkbox-check\"> ").concat(item.content, " </span>\n    </label> <a href=\"#\" class=\"delete\"></a> </li>");
    });
    cardCheck.innerHTML = string;
  }
}); //加總功能，但要放在新增和刪除待辦才有用，單獨放沒用(?)
//跑完後加總重新累加,故要用forEach
//try
//監聽每個 checkbox 的變化

checkbox.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    var count = 0; // 計數器

    data.forEach(function (checkbox) {
      if (checkbox.checked) {
        count++;
      }
    });
    waittodo.textContent = "\u5DF2\u52FE\u9078 ".concat(count, " \u500B checkbox");
  });
});
//# sourceMappingURL=all.js.map
