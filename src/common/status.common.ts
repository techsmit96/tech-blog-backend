export const STATUS_CODE = {
  OK: 200,
  TRIPLEA: 151,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  INFO: 250,
  NON_AUTHORITATIVE: 203,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409,
  PROXY_AUTH_FAILED: 412,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  VALIDATION_FAILURE: 450,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  SERVER_TIMEOUT: 504,
};

export const ERROR_MSGS = {
  SERVER_ERROR: "Unable to process, please try again",
  UNAUTHORIZED: "You are not authorized",
  NOT_FOUND: "Resource not found",
  TOKEN_EXPIRED: "Token has expired",
  INTERNAL_SERVER_ERROR: "Internal server error",
  TOKEN_MISSING: "No token provided",
  INVALID_TOKEN: "Invalid token format",
};

export const INFO_MSGS = {
  SUCCESS: "Request successful",
  CREATED: "Resource created successfully",
  UPDATED: "Resource updated successfully",
  DELETED: "Resource deleted successfully",
  FOUND: "Data found.",
};

export const CONSTANTS = {};
