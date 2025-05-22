# TestWale.AI Frontend

This is the frontend application for TestWale.AI, built with React and Material-UI.

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd genstrive-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Backend Integration Points

### Authentication Endpoints

The following endpoints need to be implemented in the backend:

1. **Login Endpoint**
   - Route: `/api/auth/login`
   - Method: POST
   - Body:
     ```json
     {
       "email": "string",
       "password": "string",
       "userType": "student" | "mentor"
     }
     ```
   - Response:
     ```json
     {
       "token": "string",
       "user": {
         "id": "string",
         "email": "string",
         "name": "string",
         "userType": "student" | "mentor"
       }
     }
     ```

2. **Signup Endpoint**
   - Route: `/api/auth/signup`
   - Method: POST
   - Body:
     ```json
     {
       "email": "string",
       "password": "string",
       "name": "string",
       "phone": "string",
       "userType": "student" | "mentor"
     }
     ```
   - Response:
     ```json
     {
       "token": "string",
       "user": {
         "id": "string",
         "email": "string",
         "name": "string",
         "userType": "student" | "mentor"
       }
     }
     ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=your_backend_api_url
```

## Project Structure

```
src/
├── pages/
│   ├── Login/
│   │   └── Login.jsx
│   └── SignUp/
│       └── SignUp.jsx
├── components/
├── App.jsx
└── main.jsx
```

## Dependencies

- React 18
- Material-UI 5
- React Router DOM 6
- Vite

## Development

The project uses Vite as the build tool. Key commands:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Notes for Backend Developer

1. Implement proper CORS configuration to allow requests from the frontend
2. Set up proper authentication middleware
3. Implement proper error handling and validation
4. Use secure password hashing
5. Implement proper session management
6. Set up proper database schema for users

## API Integration

To integrate the backend:

1. Update the API URL in the `.env` file
2. Implement API calls in the frontend components
3. Handle authentication state management
4. Implement proper error handling
5. Add loading states for API calls

## Security Considerations

1. Implement proper input validation
2. Use HTTPS
3. Implement rate limiting
4. Set up proper CORS policies
5. Use secure session management
6. Implement proper password policies
