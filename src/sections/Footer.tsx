import Heading from '../components/ui/Heading';
import Paragraph from '../components/ui/Paragraph';
import Button from '../components/ui/Button';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-50 text-gray-700 px-6 py-10 border-t w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-start w-full md:w-auto">
          <Heading level={4} text="ShoeStyle" className="text-gray-900" />
          <hr className="border-t border-gray-200" />
          <Paragraph variant="small" className="text-gray-700">
            © {new Date().getFullYear()} ShoeStyle. All rights reserved.
          </Paragraph>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/about'}>
            About
          </Button>
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/products'}>
            Products
          </Button>
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/contact'}>
            Contact
          </Button>
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/support'}>
            Support
          </Button>
        </nav>
      </div>

      <div className="mt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <span></span>
        <div className="flex gap-4 text-gray-500">
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/privacy'}>
            Privacy
          </Button>
          <Button className='!no-underline text-gray-500' variant="link" size="sm" onClick={() => window.location.href='/terms'}>
            Terms!
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;