import Cookies from "js-cookie"; // Assuming you're using js-cookie for cookie management
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";

const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/pt.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "Italian", value: "it", src: "https://flagcdn.com/h60/it.png" },
  { label: "Chinese", value: "zh", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Japanese", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      gaTrack: true,
      gaId: "UA-XXXXX-Y", // Replace with your Google Analytics ID if tracking is enabled
      autoDisplay: true, // Automatically display the Google Translate toolbar
    },
    "google_translate_element"
  );
}

function GoogleTranslate() {
  const router = useRouter();
  const [langCookie, setLangCookie] = useState("");

  // Function to get and set the initial language from cookies
  const initializeLangCookie = () => {
    const storedLang = Cookies.get("googtrans") || "/en/it"; // Default to '/en/it' if no cookie is set
    setLangCookie(storedLang);
  };

  // Effect to initialize Google Translate API and set initial language
  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
    initializeLangCookie();
  }, []);

  // Function to handle language change
  const onChange = (value) => {
    const lang = `/en/${value}`; // Assuming '/en/' is the base path for language URLs
    setLangCookie(lang);
    Cookies.set("googtrans", lang); // Update the cookie with the selected language
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }

    // Update router query parameter to maintain language selection in URL
    router.push(`/?lang=${value}`, undefined, { shallow: true });
  };

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>
      <LanguageSelector onChange={onChange} value={langCookie} />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

function LanguageSelector({ onChange, value }) {
  const langCookie = value.split("/")[2];

  // Function to handle select change
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <select
      className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
      onChange={handleChange}
      value={langCookie}
    >
      {languages.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
}

export default GoogleTranslate;
