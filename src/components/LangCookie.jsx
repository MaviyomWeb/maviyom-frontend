import Cookies from "js-cookie";

const getPrefLangCookie = () => {
  const googtransCookie = Cookies.get("googtrans");
  if (googtransCookie) {
    const langCode = googtransCookie.split("/")[2];
    if (langCode) {
      return langCode;
    }
  }
  return "en"; // Default to 'en' if the cookie or language code isn't found
};

export default getPrefLangCookie;
