import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ulタグ生成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);

  // 未完了リストに追加
  document.getElementById("inconplete-list").appendChild(ul);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
