export const asyncTryCatch = async (fn) => {
  try {
    const response = await fn();
    return {success: true, response};
  } catch (error) {
    return {success: false, error};
  }
};
