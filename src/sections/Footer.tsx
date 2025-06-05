import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Button from '../components/ui/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 py-10 border-t w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-start w-full md:w-auto">
          <Heading level={4} text="ShoeStyle" className="text-gray-900" />
          <hr className="my-4 w-full border-gray-700" />
          <Paragraph variant="small" className="text-gray-400">
            © {new Date().getFullYear()} ShoeStyle. All rights reserved.
          </Paragraph>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
          <Button variant="link" size="sm" onClick={() => window.location.href='/about'}>
            About
          </Button>
          <Button variant="link" size="sm" onClick={() => window.location.href='/products'}>
            Products
          </Button>
          <Button variant="link" size="sm" onClick={() => window.location.href='/contact'}>
            Contact
          </Button>
          <Button variant="link" size="sm" onClick={() => window.location.href='/support'}>
            Support
          </Button>
        </nav>
      </div>

      <div className="mt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <span></span>
        <div className="flex gap-4 text-sky-300">
          <Button variant="link" size="sm" onClick={() => window.location.href='/privacy'}>
            Privacy
          </Button>
          <Button variant="link" size="sm" onClick={() => window.location.href='/terms'}>
            Terms
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;