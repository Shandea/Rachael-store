import Header from "../components/ui/Heading.tsx";
import Button from "../components/ui/Button.tsx";
import heroShoes from "../assets/Images/heroShoes.png";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto h-auto min-h-[80vh] py-12 md:gap-4"
    >
      {/* Left: Text content */}
      <div className="flex-1 text-center md:text-left">
        <Header level="h1">Step Into Comfort & Style</Header>
        <br />
        <Header level="h4">
          Discover our new collection of premium shoes designed for both comfort
          and style. Crafted with the finest materials and attention to detail.
        </Header>
        <br />
        <div className="flex justify-center md:justify-start mt-4 mb-8">
          <Button className="cursor-pointer">Shop Collection</Button>
          <Button variant="link" className="cursor-pointer ml-4">
            Learn More
          </Button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:justify-end flex-1 mt-6 md:mt-0">
        <img
          src={heroShoes}
          alt="Picture of Tennis-Shoes"
          className="w-full max-w-md md:max-w-4xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;