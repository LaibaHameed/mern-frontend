const headers = {
  'Content-Type': 'application/json',
};

export const AppResponse = ({statusCode, message, body}) => {
  return new Response(JSON.stringify({statusCode, message, body}), {
    status: statusCode,
    headers,
  });
};

export const AppError = ({statusCode, message}) => {
  return new Response(JSON.stringify({statusCode, message}), {
    status: statusCode,
    headers,
  });
};
