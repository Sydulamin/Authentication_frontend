
# Project Name: Authentication Frontend

This project is the frontend application for the authentication system, built with modern web technologies and deployed to **Cloudflare Pages**.

## Features
- **Authentication System**: Provides login and registration functionality.
- **Serverless Deployment**: Deployed to Cloudflare Pages for fast and reliable hosting.
- **CI/CD Integration**: Automatically deployed through GitHub Actions upon pushing to the `main` branch.

## Prerequisites

To run this project locally and deploy it to Cloudflare Pages, make sure you have the following installed:

- **Node.js** (v20 or later)
- **npm** (Node Package Manager)
- **Cloudflare API Token** with Pages permissions

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/authentication-frontend.git
cd authentication-frontend
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up Cloudflare Pages:
- Go to [Cloudflare Pages](https://pages.cloudflare.com/).
- Create a new Pages project and link it to your GitHub repository.
- Note down your **Cloudflare API token** (make sure it has appropriate Pages permissions).
- Set up your **Cloudflare account ID**.

### 4. Configure GitHub Secrets:
- In your GitHub repository, go to **Settings** → **Secrets** → **Actions** → **New repository secret**.
- Add the following secrets:
  - `CF_API_TOKEN`: Your Cloudflare API Token.
  - `CF_ACCOUNT_ID`: Your Cloudflare Account ID.

## Usage

### Running the application locally:
To run the application locally, use the following command:
```bash
npm start
```
This will start the application on your local machine. 

### Building the application:
To build the application for production, use:
```bash
npm run build
```
This will generate the production-ready build in the `./dist` folder.

### Deploying to Cloudflare Pages:
Once you push your changes to the `main` branch, the GitHub Actions workflow will automatically trigger and deploy the application to **Cloudflare Pages**.

## GitHub Actions Workflow

The project is deployed automatically to Cloudflare Pages via a GitHub Actions workflow defined in the `.github/workflows/deploy.yml` file. 

The workflow includes:
- **Build Setup**: Install dependencies and set up Node.js and Wrangler (Cloudflare CLI).
- **Cloudflare Pages Deployment**: Push the build output (`./dist`) to Cloudflare Pages for hosting.

## License

Distributed under the MIT License. See the `LICENSE` file for more details.

## Contributing

Feel free to contribute by submitting issues or pull requests. All contributions are welcome!
