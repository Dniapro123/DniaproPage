



# DniaproPage

Personal portfolio website built with React, TypeScript and Vite.

The project presents my frontend and backend development direction, selected technologies, personal background, projects, and contact information. It is designed as a professional portfolio page for internship and junior developer opportunities.

## Live Demo

The project is deployed with Cloudflare Pages.

Live version:


https://dniapro-page.u-budziankou.workers.dev




## About the Project

DniaproPage is a personal developer portfolio focused on presenting my skills, projects and development path.

The website includes:

* Hero section with a short professional introduction
* About section with education, internship experience and languages
* Technologies section
* Projects section with repository and live demo links
* Contact section with email, GitHub and LinkedIn
* Light and dark theme support
* Polish and English language versions
* Responsive layout with mobile navigation

## Tech Stack

* React
* TypeScript
* Vite
* CSS Modules
* HTML
* CSS
* Cloudflare Pages

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Layout/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Technologies/
│   │   ├── Projects/
│   │   └── Contact/
│   └── ui/
├── data/
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

## Features

### Responsive Design

The layout is adapted for desktop and mobile devices. On smaller screens, the navigation changes into a mobile menu.

### Language Switch

The website supports two language versions:

* Polish
* English

### Theme Switch

The website supports:

* Dark mode
* Light mode

### Projects Data

Project information is stored separately in the `src/data/projects.ts` file. This makes it easier to add, edit or remove projects without changing the main component structure.

### CSS Modules

Component-specific styles are separated into `*.module.css` files. This keeps styling isolated and improves maintainability.

## Getting Started

### Requirements

Make sure you have installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/Dniapro123/DniaproPage.git
```

Go to the project directory:

```bash
cd DniaproPage
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

The application should be available at:

```text
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Deployment

The project can be deployed as a static website.

Cloudflare Pages configuration:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

After connecting the GitHub repository to Cloudflare Pages, every push to the production branch can automatically trigger a new deployment.

## Updating the Website

To update the deployed website:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Cloudflare Pages will automatically build and publish the new version.

## Author

Uladzislau Budziankou

GitHub: [https://github.com/Dniapro123](https://github.com/Dniapro123)

Email: [u.budziankou@outlook.com](mailto:u.budziankou@outlook.com)

## License

This project is intended as a personal portfolio project. You may use it as a reference for structure and ideas, but the personal content, branding and identity belong to the author.


