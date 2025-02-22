export default async (validateFunction, data) => {
  const {errors} = await validateFunction(data);
  return {errors};
};
