# NAVEED RIAZ TECHNICAL SERVICES EST.

A professional website for NAVEED RIAZ TECHNICAL SERVICES EST., a Dubai-based construction and technical services company offering comprehensive solutions including wallpaper fixing, plaster works, tiling, plumbing, electrical, HVAC, and carpentry services.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Professional Service Showcase** - Detailed presentation of all technical services
- **Contact Forms** - Quote request system with email notifications
- **Email Notifications** - Automatic email alerts for new quote requests
- **Modern Tech Stack** - Built with React, TypeScript, and Tailwind CSS
- **Fast Performance** - Optimized with Vite for lightning-fast loading

## 🛠️ Services Offered

- **Wallpaper Installation & Fixing** - Professional wallpaper application and repair
- **Plaster Works** - Complete plastering solutions for interior and exterior
- **Tiling Services** - Expert tile installation for floors, walls, and bathrooms
- **Plumbing** - Comprehensive plumbing installation, repair, and maintenance
- **Electrical Work** - Safe and certified electrical installations and repairs
- **HVAC Systems** - Heating, ventilation, and air conditioning services
- **Carpentry** - Custom woodwork and furniture solutions

## 🏢 Business Information

- **Company**: NAVEED RIAZ TECHNICAL SERVICES EST.
- **Location**: 36 Al Khatib Building, Satwa, Dubai, UAE
- **Phone**: +971 55 915 6868
- **Email**: navriaz1978@gmail.com

## 🔧 Technical Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Wouter** for lightweight client-side routing
- **Tailwind CSS** for responsive styling
- **shadcn/ui** for modern UI components
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation
- **Vite** for fast development and building

### Backend
- **Node.js** with Express.js framework
- **PostgreSQL** database with Drizzle ORM
- **TypeScript** for full-stack type safety
- **Zod** for runtime validation
- **EmailJS** for email notifications

### Features
- **Email Notifications** - Powered by EmailJS for quote requests
- **Form Validation** - Client and server-side validation
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main app component
├── server/                 # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database and validation schemas
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muhammadxmohid/Naveed-Riaz-Technical-Services-EST.git
cd Naveed-Riaz-Technical-Services-EST
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your EmailJS credentials:
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📧 Email Notifications Setup

The website uses EmailJS for sending email notifications when customers submit quote requests.

### EmailJS Configuration
1. Create an account at [emailjs.com](https://emailjs.com)
2. Add Gmail service and get your Service ID
3. Create an email template and get Template ID
4. Get your Public Key and Private Key from account settings
5. Add these values to your `.env` file

### Email Template Variables
The email template uses these variables:
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email address
- `{{customer_phone}}` - Customer's phone number
- `{{service_requested}}` - Requested service type
- `{{project_details}}` - Project description
- `{{submission_time}}` - Submission timestamp

## 🌐 Deployment

The application is ready for deployment on various platforms:

### Replit Deployment
- The project is configured for Replit deployment
- Simply click the "Deploy" button in your Replit workspace

### Other Platforms
- **Vercel**: Connect your GitHub repository and deploy
- **Netlify**: Link repository and configure build settings
- **Railway**: Connect GitHub and deploy with PostgreSQL addon

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop computers (1920px and above)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🔒 Security Features

- Input validation on both client and server
- SQL injection prevention through Drizzle ORM
- XSS protection with proper data sanitization
- Environment variables for sensitive data
- Rate limiting for API endpoints

## 📄 License

This project is proprietary software owned by NAVEED RIAZ TECHNICAL SERVICES EST.

## 📞 Support

For technical support or business inquiries:
- **Phone**: +971 55 915 6868
- **Email**: navriaz1978@gmail.com
- **Address**: 36 Al Khatib Building, Satwa, Dubai, UAE

---

© 2025 NAVEED RIAZ TECHNICAL SERVICES EST. All rights reserved.