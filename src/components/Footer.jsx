const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ProductStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;