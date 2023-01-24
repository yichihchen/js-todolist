let data = [];
const listInput = document.querySelector(".button-add");
const txt = document.querySelector(".txt");
//innerHTML要加到ul內，故要設定
const cardCheck = document.querySelector(".card-check");
//後續刪除代辦要用到X號
const deleteList = document.querySelector(".delete");



//新增待辦--不會動==
listInput.addEventListener("click", function (e) {
  if (txt.value == "") {   //沒輸入字要提醒
    alert("請輸入訊息");
    return;
  } else {
    //把輸入欄的資料推到data內
    let object = {};
    object.content = txt.value;
    data.push(object);
    //要加index是因為後續要刪除待辦

    let string = '';
    data.forEach(function (item, index) {
      //原本let string = ''; 的位置，主控台一直說string is not defined
      string += `<li data-num="${index}"><label class="checkbox-content">
      <input type="checkbox" class="checkbox"><span class="checkbox-check"> ${item.content} </span>
    </label> <a href="#" class="delete"></a> </li>`
      //原本cardCheck.innerHTML = string;的位置，但一直沒辦法持續新增，只能新增第一項
    })
    cardCheck.innerHTML = string;

  }
})


//刪除待辦