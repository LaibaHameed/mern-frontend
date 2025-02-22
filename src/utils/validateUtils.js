export const validate = async (schema, data) => {
  return await schema
    .validate(data, {abortEarly: false})
    .then((parameters) => {
      return {parameters};
    })
    .catch((error) => {
      return {
        errors: error.errors.join(', '),
      };
    });
};
