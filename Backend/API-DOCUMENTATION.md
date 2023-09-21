# API Documentation

---

## 1. User Signup API

### Endpoint:
- **URL**: `localhost:3000/api/v1/user/signup`
- **Method**: `POST`

### Description:
This API is responsible for creating a new user and storing the user's details in the database.

### Request Body:
```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

### Response:

#### Success Response:

- **Status Code**: `201 CREATED`

```json
{
    "success": true,
    "messages": "User Created SuccessFully",
    "data": {
        "name": "string",
        "email": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime"
    },
    "error": {}
}
```

#### Error Response:

- **Status Code**: will depend on the nature of the error.

```json
{
   "success": false,
   "messages": "Something went wrong",
   "data": {},
   "error": {}
}
```

---

## 2. User Signin API

### Endpoint:

- **URL**: `localhost:3000/api/v1/user/signin`
- **Method**: `POST`

### Description:
This API is responsible for verifying user credentials and fetching user details if the credentials are correct.

### Request Body:
```json
{
    "email": "string",
    "password": "string"
}
```

### Response:

#### Success Response:

- **Status Code**: `200 OK`

```json
{
    "success": true,
    "messages": "User fetched Successfully",
    "data": {
        "id": "user_id",
        "name": "string",
        "email": "string"
    },
    "error": {}
}
```

#### Error Response:

- **Status Code**: will depend on the nature of the error.

```json
{
   "success": false,
   "messages": "Something went wrong",
   "data": {},
   "error": {}
}
```

---

## 3. Response Data API

### Endpoint:

- **URL**: `localhost:3000/api/v1/response/feed`
- **Method**: `POST`

### Description:
This API is responsible for receiving and storing detailed user response data.

### Request Body:

```json
{
    "userid": "user_id",
    "name": "string",
    "age": "int",
    "gender": "string",
    //... other response details as provided
}
```

### Response:

#### Success Response:

- **Status Code**: `201 CREATED`

```json
{
    "success": true,
    "messages": "Response created Successfully",
    "data": {...}, // This will contain the created response details
    "error": {}
}
```

#### Error Response:

- **Status Code**: will depend on the nature of the error.

```json
{
   "success": false,
   "messages": "Something went wrong",
   "data": {},
   "error": {}
}
```

---

*Note: The specific error details in the `error` object and the precise structure of the `data` object in the Success Response for each endpoint can vary based on the application's logic and requirements.*
