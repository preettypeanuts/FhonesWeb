# Movie API Documentation

## Endpoints :

List of available endpoints:

### 1. Home Endpoints
- `GET /`

### 2. Public Endpoints
- `GET /brands`
- `GET /brands/:id/devices`
- `GET /brands/:id/detail`
- `GET /brands/:id/search`

### 3. Google Login Endpoints
- `POST /auth/google/callback`

### 4. Auth Endpoints
- `POST /login`
- `POST /register`

### 5. User Action Endpoints
- `GET /devices/:id/likes`
- `GET /devices/:id/comments`
- `POST /devices/:id/comments`
- `DELETE /devices/:id/comments`

&nbsp;

### 1. Home Endpoints

## `1. GET /`

Description:
- Testing to make sure server running

_Response (200 - OK)_


```json
{
  "message": "Testing 1"
}
```

&nbsp;

### 2. Public Endpoints

## `1. GET /brands`
Description:
- Get all brands data from GSM Arena API

_Response (200 - OK)_

```json
[
  {
    "id": "apple-phones-48",
    "name": "Apple",
    "devices": 98
  }
]
```
  
## `2. GET /brands/:id/devices`
Description:
- Show all device data by brands id
  
Request:
- params:
```json
{
  "id": "string (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": "apple_iphone_13_pro_max-11089",
    "name": "iPhone 13 Pro Max",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
    "description": "Apple iPhone 13 Pro Max smartphone. Announced Sep 2021..."
  }
]
```

## `3. GET /brands/:id/detail`
Description:
- Show unit device detail spesification by device id

Request:
- params:
```json
{
  "id": "string (required)"
}
```

_Response (200 - OK)_

```json
{
  "name": "Apple iPhone 13 Pro Max",
  "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
  "quickSpec": [
    {
      "name": "Display size",
      "value": "6.7\""
    }
  ],
  "detailSpec": [
    {
      "category": "Network",
      "specifications": [
        {
          "name": "Technology",
          "value": "GSM / CDMA / HSPA / EVDO / LTE / 5G"
        }
      ]
    }
  ]
}
```

## `4. GET /brands/:id/search`
Description:
- Search device by id

Request:
- params:
```json
{
  "id": "string (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": "casio_g_zone_ca_201l-5384",
    "name": "Casio G'zOne CA-201L",
    "img": "https://fdn2.gsmarena.com/vv/bigpic/casio-gzone-ca-201l.jpg",
    "description": "Casio G'zOne CA-201L Android smartphone. Announced Mar 2013..."
  }
]
```
&nbsp;

### 3. Google Login Endpoints
## `1. POST /auth/google/callback`
Description:
- Third party api using Google for login or register user by google
 
&nbsp;

### 4. Auth Endpoints
## `1. POST /login`
Description:
- Default registered user login
  Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Succes login!",
  "token": "String"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "please fill email or password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "email or password unregistered"
}
```

## `1. POST /register`
Description:
- New user register

Request:

- headers: 

```json
{
  "token": "string"
}
```

- body: 
```json 
{
    "username": "mrafly",
    "email": "mrafly@mail.com",
    "password": "mrafly.com"
}
```

_Response (200 - OK)_

```json
{
  "message": "Created new user mrafly@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "User name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Password cannot empty"
}
```

&nbsp;

### 5. User Action Endpoints
## `1. GET /devices/:id/likes`
Description:
- Increment like feature by tabloid id

Request:
- params:
```json
{
  "id": "string (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": "integer",
  "likeCount": "string",
  "deviceId": "string",
  "userid": "integer"
}
```

_Response (404 - Forbidden)_
```json
{
  "message": "No matches post!"
}
```
  
## `1. GET /devices/:id/comments`
Description:
- Load post comments by post id

Request:
- params:
```json
{
  "id": "string (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 4,
    "comment": "ikasin",
    "deviceId": "apple_iphone_15_pro-12557",
    "userId": 8,
    "createdAt": "2023-11-16T15:09:55.577Z",
    "updatedAt": "2023-11-16T15:09:55.577Z",
    "User": {
      "id": 8,
      "username": "Memang",
      "email": "mrafly212001@gmail.com",
      "password": "$2a$10$mZt2f8MOMPwhiBJTRbpP8.Y36uSjEiFPz.QpGgJig4LxbDrQTAsV6",
      "role": "Client",
      "createdAt": "2023-11-16T11:00:26.262Z",
      "updatedAt": "2023-11-16T11:00:26.262Z"
    }
  },
]
```

_Response (404 - NotFound)_

```json
{ 
  "message": "No available comment!" 
}
```
  
## `1. POST /devices/:id/comments`
Description:
- Post new comment by post id

Request:
- params:
```json
{
  "id": "string (required)"
}
```

- body:
```json
{
  "comment": "string (required)"
}
```

_Response (200 - OK)_ 
```json
{
  "id": 17,
  "comment": "string",
  "deviceId": "apple_iphone_15_pro-12557",
  "userId": 1,
  "updatedAt": "2023-11-23T09:58:08.598Z",
  "createdAt": "2023-11-23T09:58:08.598Z"
}
```

_Response (400 - Bad Request)_

```json
{ 
  "message": "No available comment!" 
}
```


## `1. DELETE /devices/:id/comments/:commentId`
Description:
- Delete posted comments by comment id and post id
  
Request:
- params:
```json
{
  "id": "string (required)",
  "commentId": "integer"
}
```

_Response (200 - OK)_ 
```json
{
  "name": "Comment Deleted"
}
```
_Response (400 - Bad Request)_

```json
{ 
  "message": "No available comment!" 
}
```

&nbsp;




&nbsp;

## Global Error

_Response (400 - Bad Request)_

```json
{
  "message": "error.errors[0].message"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```