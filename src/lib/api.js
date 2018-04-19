export const fetchSups = async () => {
  let res = await fetch('http://localhost:5000//sups');
  let data = await res.json();
  return data;
}

export const fetchUsers = async () => {
  let res = await fetch('http://localhost:5000//users');
  let data = await res.json();
  return data;
}