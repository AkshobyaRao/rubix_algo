import  "./globals.scss";
import Navbar from ".//navbar"
import Hero from ".//hero"
import PLLs from ".//pll_algs"
export default function Home() {
  return (
    <main>
      <Hero/>
      <PLLs/>
    </main>    
  );
}
