import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center p-4">
      <p>Connect with me:</p>
      <ul className="flex justify-center items-center gap-4">
        <li>
          <a href="hhttps://www.linkedin.com/in/fdezleonpablo/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/FdezLeonPablo" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            Next.js Docs
          </a>
        </li>
        <li>
          <a href="https://thecatapi.com/docs.html" target="_blank" rel="noopener noreferrer">
            The Cat API Docs
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
