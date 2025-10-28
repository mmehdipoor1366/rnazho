# رزرو ناژو - راهنمای راه‌اندازی
# Rnazho Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/mmehdipoor1366/rnazho.git
cd rnazho
```

### 2. Install Dependencies

Choose your preferred package manager:

#### Using npm:
```bash
npm install
```

#### Using yarn:
```bash
yarn install
```

#### Using pnpm:
```bash
pnpm install
```

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration values.

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is properly formatted |
| `npm run type-check` | Run TypeScript type checking |

## 📁 Project Structure

```
rnazho/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts
├── layouts/               # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MainLayout.tsx
│   └── index.ts
├── styles/                # Additional CSS files
│   ├── components.css
│   └── animations.css
├── utils/                 # Utility functions
│   ├── formatters.ts
│   ├── validators.ts
│   ├── helpers.ts
│   └── index.ts
├── types/                 # TypeScript type definitions
│   ├── index.ts
│   ├── api.ts
│   └── env.d.ts
├── public/                # Static assets
│   ├── logo.svg
│   └── robots.txt
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # ESLint configuration
├── .prettierrc            # Prettier configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## 🔧 Configuration

### TypeScript

The project is configured with strict TypeScript settings. Path aliases are set up:

- `@/*` - Root directory
- `@/components/*` - Components directory
- `@/layouts/*` - Layouts directory
- `@/styles/*` - Styles directory
- `@/utils/*` - Utils directory
- `@/types/*` - Types directory

### Tailwind CSS

Tailwind is configured with:
- RTL (Right-to-Left) support for Persian
- Custom color palette
- Persian font family support

### ESLint & Prettier

Code quality tools are pre-configured:
- ESLint for code linting
- Prettier for code formatting
- Automatic formatting on save (if your editor supports it)

## 📱 Development Tips

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Export a default React component

Example:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}
```

### Adding New Components

1. Create a new file in `components/` directory
2. Define your component
3. Export it from `components/index.ts`

### Using Utilities

Import utilities from the utils directory:

```tsx
import { formatPersianDate, isValidEmail } from '@/utils';
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
PORT=3001 npm run dev
```

### Clear Cache

If you encounter build issues:

```bash
rm -rf .next
npm run dev
```

### Dependencies Issues

Delete node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ by mmehdipoor1366