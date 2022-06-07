import Nav from "./navbar";
import Footer from "./footer";
import ParticleBackground from "./Particle";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
      <>
        <Nav />
        <main>{children}</main>
        <ParticleBackground />
        <Footer />
      </>
    )
  }