
# Inbox2Cash Digital Growth

A modern, conversion-focused Email & SMS marketing platform for ecommerce brands. Built with React, Vite, and Tailwind CSS.

## Features
- Hero section with call-to-action buttons
- Responsive design
- Services overview
- Amplify process and success metrics
- Case studies and testimonials
- FAQ section
- Contact form integrated with Airtable
- Environment variables for secure API keys/tokens

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/Skinnyfella/inbox2cash.git
	cd inbox2cash
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Create a `.env.local` file in the root directory and add your environment variables:
	```env
	VITE_AIRTABLE_TOKEN=your_airtable_token
	VITE_AIRTABLE_BASE_ID=your_airtable_base_id
	```

### Development
Start the local development server:
```bash
npm run dev
# or
yarn dev
```

### Building for Production
```bash
npm run build
# or

```

### Deployment
This project is ready for deployment on Vercel. All routes are handled for client-side navigation.

1. Push your code to GitHub.
2. Connect your repo to Vercel (https://vercel.com/import).
3. Add your environment variables in the Vercel dashboard.
4. Deploy!

## Folder Structure
- `src/pages/` — Main pages (Index, Contact, Process, etc.)
- `src/components/` — Reusable UI components
- `public/` — Static assets

## Security
- `.env.local` and all `.env*` files are gitignored by default.
- No secrets or tokens are committed to the repository.

## License
MIT
- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d5a76db1-0014-4119-9cc1-f1e3b743a2a8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
