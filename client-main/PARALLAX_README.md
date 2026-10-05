# Background Image Parallax with Framer Motion

A beautiful parallax scrolling effect built with **Framer Motion**, **React**, and **Next.js**.

## 🚀 Features

- **Smooth Parallax Effect**: Background images move at different speeds than foreground content
- **Framer Motion Animations**: Using `useScroll` and `useTransform` hooks
- **Lenis Smooth Scrolling**: Enhanced smooth scroll experience
- **Fully Responsive**: Works beautifully on all screen sizes
- **TypeScript**: Type-safe components

## 📦 Components

### ParallaxBackground
The main component that creates the parallax effect on background images.

```tsx
<ParallaxBackground 
  imageSrc="your-image-url" 
  speed={0.5}
  alt="Description"
>
  {/* Your content here */}
</ParallaxBackground>
```

**Props:**
- `imageSrc`: URL of the background image
- `speed`: Parallax speed (0-1, where 1 is faster)
- `alt`: Alt text for the image
- `children`: Content to display over the background

### ParallaxSection
A component for adding parallax motion to content sections.

```tsx
<ParallaxSection speed={0.3}>
  {/* Your content here */}
</ParallaxSection>
```

**Props:**
- `speed`: Motion speed
- `className`: Additional CSS classes

### SmoothScroll
Wraps the entire app to provide smooth scrolling using Lenis.

## 🛠️ How It Works

1. **useScroll Hook**: Tracks scroll progress for each parallax section
2. **useTransform Hook**: Transforms scroll progress into Y-axis movement
3. **Lenis**: Provides buttery-smooth scrolling experience
4. **Motion Components**: Framer Motion's `<motion.div>` applies the transformations

## 🎨 Customization

### Adjust Parallax Speed
Change the `speed` prop to control how fast elements move:
- Lower values (0.2-0.4): Subtle effect
- Medium values (0.5-0.7): Moderate effect  
- Higher values (0.8-1.0): Dramatic effect

### Change Images
Replace the Unsplash URLs in [page.tsx](app/page.tsx) with your own images.

### Modify Scroll Offsets
Edit the `offset` array in ParallaxBackground component:
```tsx
offset: ['start start', 'end start']
```

## 🏃 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the parallax effect in action!

## 📚 Learn More

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Next.js Documentation](https://nextjs.org/docs)

## 🎯 Performance Tips

- Images are lazy-loaded except the hero image
- Framer Motion uses GPU-accelerated transforms
- Lenis provides optimized scroll performance
- Next.js Image component optimizes images automatically
