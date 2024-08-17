# FilterFlow - Client

FilterFlow is a modern, responsive web application built with React and Tailwind CSS. It offers a seamless user experience for browsing products with advanced filtering options. The project aims to provide a clean, efficient, and visually appealing interface for users to explore various products.

## Features

- **Responsive Design:** The application is fully responsive, ensuring a smooth experience on both mobile and desktop devices.
- **Advanced Filtering:** Users can easily filter products based on various criteria.
- **Authentication:** Secure login and registration using email/password and Google authentication.
- **Private Routes:** Protects certain routes, ensuring that only authenticated users can access them.
- **Modern UI:** Styled with Tailwind CSS, including components from daisyUI and custom styles to provide a sleek and modern look.
- **Efficient Navigation:** Smooth and intuitive navigation across different pages, including Home, Products, About, Contact, and more.

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS (with daisyUI and Flowbite for components)
  - React Router for navigation
  - Axios for API requests

- **Authentication:**
  - Firebase Authentication
  - Context API for managing auth state
  - Private routes for protecting pages

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khalidbinibrahim01/filterflow-client.git
   cd filterflow-client

2. **Clone the .env.example:**
   ```bash
   VITE_APIKEY=your_api_key
   VITE_AUTHDOMAIN=your_auth_domain
   VITE_PROJECTID=your_project_id
   VITE_STORAGEBUCKET=your_storage_bucket
   VITE_MESSAGINGSENDERID=your_messaging_sender_id
   VITE_APPID=your_app_id
