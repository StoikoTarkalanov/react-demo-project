const serverURL = 'https://dummyjson.com/users';

export const getAllData = async () => {
  const response = await fetch(`${serverURL}`);
  const result = await response.json();
  return result;
};

export const getUserById = async (id) => {
  const response = await fetch(`${serverURL}/${id}`);
  const result = await response.json();
  return result;
};

export const updateUser = async (id = 1, { name, age, gender }) => {
  const response = await fetch(`${serverURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: name,
      age: age,
      gender: gender,
    }),
  });
  const result = await response.json();
  return result;
};
