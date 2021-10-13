// always put the optional? as the last param
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1C", "cake");
printIngredient("1C", "cake", "someting more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
    // 强制把 string | undefined cast成 string
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback: () => void) {
  console.log([x, y]);
  callback?.(); // only invoke if the function exists
}
