"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "@/Navigation/Navigation";
import { getAllCategoryData } from "@/Contants/APIEndpoint";

export default function Header({ categoryProductOptions }) {
  const { pathname } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [rawCategories, setRawCategories] = useState([]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch raw category data (with subCategories[].slug and .name)
  useEffect(() => {
    fetch(getAllCategoryData)
      .then((res) => res.json())
      .then((json) => {
        // API returns { data: [{ name, slug, subCategories: [{ name, slug }] }] }
        const cats = json?.data || [];
        setRawCategories(cats);
      })
      .catch((err) => console.error("Failed to fetch categories for nav:", err));
  }, []);

  return (
    <Navigation
      rawCategories={rawCategories}
      categoryProductOptions={categoryProductOptions}
      scrolled={scrolled}
    />
  );
}