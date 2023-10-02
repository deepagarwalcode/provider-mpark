export const objectToFormData = (obj, data) => {
  if (!data) data = new FormData();
  Object.entries(obj).forEach((input) => {
    data?.append(input[0], input[1]);
  });
  return data;
};