"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AuthModal from "@/components/AuthModal"; // Import the AuthModal
import Booking from "@/components/Booking";
import FeaturedHairdressers from "@/components/Featured";
import FeaturedHairstyles from "@/components/FeaturedArt";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import HamburgerMenu from "@/components/ExternalHamMenu";
import HorizontalNav from "@/components/HorizontalNav";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const stylists = [
    { name: "Jane Doe", role: "Color Specialist" },
    { name: "John Smith", role: "Cutting Expert" },
  ];

  const styles = [
    { name: "Hokusai Waves", file: "beach-wave.jpg" },
    { name: "Marley Bob", file: "sleek-bob.jpg" },
  ];

  const handleAuthClick = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  // Handle click outside of modal

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Specify the type here
      const target = event.target as HTMLElement; // Cast to HTMLElement
      if (isAuthModalOpen && target.classList.contains("modal-overlay")) {
        closeAuthModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAuthModalOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isAuthModalOpen) {
        closeAuthModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isAuthModalOpen]);

  const menuItems = {
    Journal: ["Gen Z", "Boomer", "Millennial", "Gen X"],
    Styles: [" ", " "],
    Write: ["BuJo-bullet journaling", "Self Care", "Soul Rebel"],
    Movements: ["Expression", "Impression", "Real Natural", "Abstract"],
    Bookings: ["Book Appointment", "View Schedule", "Manage Bookings"],
  };

  // Define styles for myArt and museumsArt
  const myArt = ["Wood Cut", "Carvings", "Sculpture"]; // Items for myArt
  const museumsArt = ["Painting", "Mixed media"]; // Items for museumsArt

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Head>
        <title> BYGXS</title>
        <meta name="description" content="Personne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleMenu={toggleMenu}
        handleAuthClick={handleAuthClick}
      />

      {/* Sliding Menu */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <HamburgerMenu
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/* Horizontal Navigation with Hover Submenus */}
      <HorizontalNav
        isDarkMode={isDarkMode}
        menuItems={menuItems}
        myArt={myArt} // Pass myArt instead of womenStyles
        museumsArt={museumsArt} // Pass museumsArt instead of menStyles
      />

      {/* Main Content */}
      <MainContent
        isDarkMode={isDarkMode}
        styles={styles}
        stylists={stylists}
      />

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal
          isAuthModalOpen={isAuthModalOpen}
          closeAuthModal={closeAuthModal}
          isSignUp={isSignUp}
          toggleAuthMode={toggleAuthMode}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
