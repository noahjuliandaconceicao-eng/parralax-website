import ParallaxBackground from '@/components/ParallaxBackground';
import HeaderDropdown from '@/components/HeaderDropdown';

export default function Home() {
  return (
    <div className="relative">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8" style={{backgroundColor: "#2a2a2a"}}>
        <div></div>
        <HeaderDropdown />
        <div className="flex items-center gap-4">
        </div>
      </header>

      {/* Hero Section with Parallax Background */}
      <ParallaxBackground 
          imageSrc="/b&w.png" 
          alt="Black and white image"
        >
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-8xl uppercase">
            BACKGROUND PARALLAX
          </h1>
        </div>
      </ParallaxBackground>

      {/* Content Section */}
      <section className="relative h-screen flex items-center justify-center" style={{backgroundColor: "#15171b"}}>
        <div className="mx-auto max-w-4xl px-8">
          <p className="text-2xl md:text-3xl leading-relaxed text-white text-center">
            THE REAL DANGER FOR MOST OF US IS NOT THAT WE SHOOT TOO HIGH AND MISS, BUT THAT WE SHOOT TOO LOW AND WE HIT. WE SHOOT TOO LOW IN OUR LIFE, AND WE GET EXACTLY WHAT WE SHOT FOR. WHAT DO YOU LOSE BY SHOOTING HIGH?
          </p>
        </div>
      </section>

      {/* Second Parallax Background */}
      <ParallaxBackground 
        imageSrc="/b&w3.png" 
        alt="Black and white image 3"
      >
        <div className="relative z-10 text-center text-white px-8">
          <h2 className="text-5xl font-bold tracking-tight md:text-7xl uppercase">
            BACKGROUND PARALLAX
          </h2>
        </div>
      </ParallaxBackground>

      {/* Footer */}
      <footer className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-black text-2xl md:text-3xl">© 2026 Parallax Effects</p>
        </div>
      </footer>
    </div>
  );
}
