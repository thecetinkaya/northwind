# Customer Management Application

This project contains a customer management application built using Vite, React, React Router Dom, and Tailwind CSS. You can perform actions such as fetching, sorting, and adding customer data.

## Installation

1. Clone the repository to your computer: `git clone https://github.com/thecetinkaya/northwind.git`
2. Navigate to the project folder: `cd northwind`
3. Install the required dependencies using npm: `npm install`

## Usage

- Start the development server: `npm run dev`
- Open your browser and visit `http://localhost:3000` to view the application.

## Pages

### CustomerPage

This page is used to view and sort customer data.

- Customer data is fetched from the [Northwind API](https://northwind.vercel.app/api/customers).
- Clicking on table headers enables ascending and descending sorting.
- The search bar allows for customer data searching.

### AddCustomer

This page is used to add new customer data.

- Fill in the required fields and click the "Add" button to insert customer data.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`
3. Make your changes and commit them: `git commit -m 'Added new feature'`
4. Push to your branch: `git push origin new-feature`
5. Create a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Note about React Setup with Vite

This project utilizes Vite as a build tool for the React application. Unlike traditional setups, Vite offers an optimized development experience and faster builds. You can find the main application entry point in the `src/main.jsx` file.

To learn more about Vite, visit the [Vite documentation](https://vitejs.dev/).
