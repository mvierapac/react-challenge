# React Challenge – Smartphone Store

### 🔍 Project Overview

This project is a technical challenge for a Frontend position. It is a responsive web application that allows users to browse a list of smartphones, view product details, select options like color and storage, and manage a shopping cart.

### 🔒 Features

- Display a grid of smartphones fetched from an API
- Detail page for each phone with option selection for color and storage capacity.
- Responsive design adapted for both mobile and desktop views
- Cart functionality using React Context and synchronized with `localStorage`

### 🛠️ Technologies Used

- **React**
- **React Router** for routing (`react-router-dom`)
- **Vite** as a build tool
- **Vitest** + **Testing Library** for unit testing
- **TanStack Query** for data fetching and caching

### 📁 Project Structure

- `components/`: Reusable generic components
- `context/`: React context for global state management
- `pages/`: Main application views and their components
- `services/`: API service functions
- `hooks/`: Custom React hooks

### 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mvierapac/react-challenge.git
   cd react-challenge
   ```
   
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```
4. (Optional) Create a production build:

   ```bash
   npm run build
   ```

### 🧪 Testing

This project uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for unit testing.

Run all tests

```bash
npm run test
```

Generate coverage report

```bash
npm run test -- --coverage
```

### 🚀 Deploy

- [Live Demo](https://react-challenge-zara.vercel.app/)
