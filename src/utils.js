import jwt from 'jsonwebtoken';
const APP_SECRET = 'this_is_a_secret';


function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}


function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const payload = getTokenPayload(token);
      const { userId } = payload;
      return userId;
    }
  } else if (authToken) {
    const payload = getTokenPayload(authToken);
    const { userId } = payload;
    return userId;
  }

  throw new Error('Not authenticated');
}

export { getTokenPayload, getUserId, APP_SECRET }


