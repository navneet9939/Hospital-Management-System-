# HeavenBed 🏥

HeavenBed is a comprehensive, modern **Hospital Management System** built with **Laravel**. It is designed to streamline hospital operations, providing dedicated interfaces for patients, doctors, nurses, and administrators.

## ✨ Key Features

### 🔐 Advanced Authentication & Security
- **Multi-Role System**: Distinct access levels for Patients, Doctors, Nurses, Receptionists, and Admins.
- **Google Single Sign-On (SSO)**: Users can register and log in instantly using their Google accounts via Laravel Socialite.
- **OTP Password Reset**: Secure 6-digit OTP verification sent via email for password recovery.
- **Custom UI**: Beautifully designed login, registration, and password reset flows.

### 🛏️ Bed & Admission Management
- **Live Bed Tracking**: Real-time overview of available, occupied, and maintenance beds.
- **Patient Bed Booking**: Patients can request hospital beds directly from their dashboard.
- **Automated Waitlists**: If the hospital is at capacity, patients are automatically placed on a prioritized waiting list.

### 👥 Role-Based Dashboards
- **Patient Dashboard**: Manage appointments, view medical records, and track bed requests.
- **Doctor Dashboard**: Manage patient schedules, write prescriptions, and review admissions.
- **Admin Dashboard**: Oversee hospital inventory, staff, emergency alerts, and overall capacity.

### 🎨 Modern UI/UX
- **TailwindCSS**: Completely custom, responsive design using TailwindCSS.
- **Dark & Light Mode**: Built-in support for multiple color themes.
- **Clean Components**: Uses modern aesthetic principles like glassmorphism, soft shadows, and clean typography.

---

## 🚀 Getting Started

### Prerequisites
- PHP 8.2 or higher
- Composer
- SQLite (or MySQL)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd Laravel_pro
   ```

2. **Install dependencies**:
   ```bash
   composer install
   npm install
   npm run build
   ```

3. **Environment Setup**:
   Duplicate `.env.example` to `.env` and configure your database and email settings:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Run Migrations & Seeders**:
   ```bash
   php artisan migrate --seed
   ```

5. **Start the application**:
   ```bash
   php artisan serve
   ```

---

## 📧 Email Configuration (For OTP)
To enable the OTP Password Reset feature, configure your SMTP settings in the `.env` file. For Gmail, use an **App Password**:
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_16_digit_app_password
MAIL_ENCRYPTION=ssl
```

## 🌐 Google OAuth Configuration
To enable "Sign in with Google", create credentials in the Google Cloud Console and add them to your `.env`:
```env
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback
```

---

## 🛠️ Tech Stack
- **Backend**: Laravel 11, PHP 8
- **Frontend**: Blade Templates, TailwindCSS, AlpineJS (optional), Lucide Icons
- **Database**: SQLite / MySQL
- **Packages**: Laravel Socialite

---

*Built with ❤️ to make healthcare management easier.*
