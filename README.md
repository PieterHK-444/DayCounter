# 📅 Day Counter

A beautiful, interactive day counter application built with Next.js and modern web technologies. Calculate the number of days between any two dates with a stunning morphing popover interface.

## ✨ Features

- **🎯 Date Range Calculation**: Calculate days between any two dates
- **🎨 Morphing Popover Interface**: Smooth animations with morphing popover effects
- **🌙 Dark/Light Theme Support**: Automatic theme switching with beautiful gradients
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Real-time Updates**: Instant calculations as you select dates
- **📊 Additional Insights**: Shows weeks and days breakdown
- **📅 Year Progress**: Displays days remaining in the current year
- **🎭 Animated Background**: Dynamic DarkVeil background with customizable effects

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom animations
- **Animations**: [Motion](https://motion.dev/) for smooth morphing effects
- **UI Components**: Custom morphing popover components
- **Date Handling**: [date-fns](https://date-fns.org/) for date calculations
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode

## 🎨 Key Features

### Morphing Popover Interface

The application features a unique morphing popover that smoothly transitions from the calculate button to display results with beautiful animations.

### Dynamic Background

Custom DarkVeil background component with:

- Configurable hue shifts
- Noise and scanline effects
- Warp animations
- Responsive scaling

### Smart Date Calculations

- Precise day counting between dates
- Week and day breakdown
- Year progress tracking
- Handles leap years automatically

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/daycounter.git
   cd daycounter
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
daycounter/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   │   ├── DatePicker.tsx
│   │   ├── morphing-popover.tsx
│   │   └── ...
│   └── core/             # Core components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── src/                  # Additional source files
    └── blocks/           # Background components
        └── Backgrounds/
            └── DarkVeil/
```

## 🎯 Usage

1. **Select Start Date**: Click on the start date field and choose your first date
2. **Select End Date**: Click on the end date field and choose your second date
3. **Calculate**: Click the "Calculate Day Number" button
4. **View Results**: The morphing popover will display:
   - Total days between dates
   - Week and day breakdown
   - Days remaining in the current year

## 🎨 Customization

### Background Effects

You can customize the DarkVeil background in `app/page.tsx`:

```tsx
<DarkVeil
  hueShift={180}
  noiseIntensity={0.0}
  scanlineIntensity={0.2}
  speed={0.3}
  scanlineFrequency={0.0}
  warpAmount={0.1}
  resolutionScale={1}
/>
```

### Theme Colors

Modify the color scheme in `components/ui/theme-provider.tsx` and your Tailwind configuration.

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:

   - Go to your repository Settings
   - Navigate to Pages section
   - Set source to "GitHub Actions"

2. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://yourusername.github.io/daycounter`

### Vercel (Alternative)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Motion](https://motion.dev/) for the smooth animations
- [Lucide](https://lucide.dev/) for the beautiful icons

---

⭐ **Star this repository if you found it helpful!**
