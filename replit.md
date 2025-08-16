# Overview

This is a full-stack web application for NAVEED RIAZ TECHNICAL SERVICES EST., a construction and technical services company based in the UAE. The application serves as a professional company website featuring service showcases, company information, and a contact form for quote requests. Built with modern web technologies, it provides a responsive user interface for potential clients to learn about services and submit inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing with support for page navigation
- **Styling**: Tailwind CSS for utility-first styling with shadcn/ui component library for consistent UI elements
- **State Management**: TanStack Query for server state management, caching, and API data synchronization
- **Form Handling**: React Hook Form with Zod validation for robust form validation and submission
- **Build Tool**: Vite for fast development server and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations and schema management
- **Schema Validation**: Zod for runtime type checking and API request validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development and database implementation for production
- **Development Setup**: Hot module replacement with Vite integration for seamless full-stack development

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon Database serverless platform
- **ORM**: Drizzle ORM with schema-first approach for database operations
- **Schema Management**: Drizzle Kit for database migrations and schema synchronization
- **Data Models**: Two main entities - Users (authentication) and Inquiries (contact form submissions)

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Session Management**: Express session configuration prepared with PostgreSQL session store
- **Future Implementation**: Ready for session-based authentication with user login/logout functionality

## External Dependencies
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography throughout the application
- **Date Handling**: date-fns for date manipulation and formatting
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts integration for custom typography (Inter, DM Sans, Fira Code, Geist Mono)