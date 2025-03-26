let ft_list = document.getElementById("ft_list");
const addnew = () => {
  let txt = prompt("Enter Toi Do list");
  const name = new Date().getTime();
  if (txt === ""){
    alert('Enter To Do list');
                return;
  }
  document.cookie = `${name}=${txt}`;
  let node = document.createElement("div");
  
  node.onclick = () => {
    const check = confirm("Delete???");
    if (check) {
      node.remove();
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }}

  node.innerHTML = txt;
  ft_list.prepend(node);
}

const check = document.cookie;
if (check.length > 0) {
  const cookie = check.split(";");
  cookie.forEach((element) => {
    let node = document.createElement("div");
    
    node.onclick = () => {
        const check = confirm("Delete???");
        if (check) {
          node.remove();
          document.cookie =
            element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        }}

    node.innerHTML = element.split("=")[1];
    ft_list.prepend(node);})}