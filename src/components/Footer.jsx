const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container px-6 mx-auto">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Kevin Bobis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;