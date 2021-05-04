import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  //alert(inputText);
  addIncompleteList(inputText);
  document.getElementById("add-text").value = "";
};
// 未完了TODOからdiv要素を削除
const deleteTargetFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了TODOに要素を追加
const addIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //alert("complete");
    deleteTargetFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const addText = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = addText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      const deleteText = deleteTarget.firstElementChild.innerText;
      document.getElementById("complete-list").removeChild(deleteTarget);

      addIncompleteList(deleteText);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //alert("delete");
    const deleteTarget = deleteButton.parentNode;
    deleteTargetFromIncompleteList(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
