import ContactHeader from "./components/ContactHeader";

export const metadata = {
  title: "Mega Navbar",
  description: "Creating a Navbar - MegaMenu",
};

function ContactLayout({ children }) {
  return (
    <main className="relative isolate w-full z-0 bg-white    pb-5 md:pb-10">
      <article>
        <ContactHeader />
        {children}
      </article>
    </main>
  );
}

export default ContactLayout;
