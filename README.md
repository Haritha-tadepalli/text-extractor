# Enhanced Text Extractor Tool with Next.js

## Overview

This is an Enhanced Text Extractor tool developed with Next.js, utilizing the OpenAI API for text extraction and analysis. The application provides a robust front-end for file uploads, handles text extraction from PDF formats, enriches the data using OpenAI, and displays the processed results in an interactive table.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Dependencies](#dependencies)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Change into the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Set up the required environment variables:

   - `OPENAI_API_KEY`: Your OpenAI API key.
   

2. Start the Next.js development server:

   ```bash
   npm run dev
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
.
├── components
│   ├── FileUpload.js
│   ├── KeyValueTable.js
│   └── ...
├── pages
│   ├── api
│   │   └── extract.js
│   ├── index.js
│   └── ...
├── public
│   └── ...
├── styles
│   ├── globals.css
│   └── ...
├── utils
│   ├── pdf.js
│   └── ...
├── .gitignore
├── README.md
├── package.json
├── next.config.js
```

- **components:** This folder contains React components used throughout your application.

- **pages:** Next.js pages directory. Each file inside this directory becomes a route in your application. The `api` folder is specifically for API routes.

- **public:** Static assets like images can be stored here.

- **styles:** CSS styles for your components. You can use modules for scoped styling.

- **utils:** Utility functions or modules that don't fit into specific components.

- **.gitignore:** Git ignore file to exclude certain files and directories from version control.

- **README.md:** Documentation for your project.

- **package.json:** Node.js package configuration file.

- **next.config.js:** Configuration file for Next.js.

## API Routes

The application provides the following API routes:

- `/api/extract`: Handles text extraction from uploaded files.


## Deployment

Deploy the application on a cloud platform such as Vercel, Netlify, Heroku, or similar.

```bash
# For example, deploy to Vercel
vercel
```

## Dependencies

- [Next.js](https://nextjs.org/)
- [OpenAI API](https://beta.openai.com/)

---
