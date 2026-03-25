# NgopiDiBlitar ☕

A modern, minimalist, and beautifully animated cafe directory for Blitar City. Built with **Next.js**, **Tailwind CSS v4**, and **Framer Motion**, inspired by Notion's clean aesthetic.

## ✨ Key Features

- 📑 **Google Sheets as Database**: No complex backend configurations! Cafe data is fetched dynamically straight from a public Google Spreadsheet.
- 🖼️ **Auto-Sliding Cloudinary Gallery**: An integrated Next.js backend API automatically scans custom Cloudinary folders and generates animated image carousels for each cafe—without manual URL entry.
- 🎨 **Notion-Inspired Aesthetic**: High-contrast monochrome design, premium typography, and subtle aesthetic background grid patterns.
- 🎭 **Framer Motion Magic**: Eye-catching entry animations, smooth scroll stagger effects, and a fluid interactive Popup Modal.
- 🌓 **Dark & Light Mode**: Seamless theme switching using `next-themes` and Tailwind v4's CSS-first approach.
- 📱 **Fully Responsive**: Custom tailored layouts, responsive maps pins, and intelligent scroll constraints designed heavily for mobile phone screens.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image CDN**: [Cloudinary](https://cloudinary.com/) (Node SDK)
- **Database**: Google Sheets (parsed via PapaParse)

## 🛠️ Local Development

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/yourusername/ngopidiblitar.git
cd ngopidiblitar
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory to enable the automated Cloudinary gallery feature. This is required to run the `/api/cafe-images` backend route securely:
```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
> **Important**: Ensure your visual assets in Cloudinary are structured as `Cafe/[Cafe Name]`. The folder name must strictly match the name listed in your Google Sheets.

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Data Management (Google Sheets)

To add new cafes, you do not need to touch the codebase. Simply:
1. Open the connected Google Spreadsheet.
2. Add or edit rows based on the columns: `Nama`, `Alamat`, `Jam Operasional`, `Price`, `WiFi SSID`, `WiFi Password`, `Maps`, `Menu`, `Instagram`.
3. *(Optional)* You can add a `Folder Cloudinary` column if you wish to link a Cloudinary folder whose name differs from the exact Cafe `Nama`.

## 👨‍💻 Developer

Designed and engineered by **Razan**.
