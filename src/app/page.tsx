import Image from "next/image";
import localFont from 'next/font/local';
import { MenuItem } from "./MenuItem";

const shuneet = localFont({
  src: [
    {
      path: '../fonts/shuneet/shuneet_light_v2.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_thin_v2.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_book_v2.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_medium_v2.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_demi_v2.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_bold_v2.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/shuneet/shuneet_heavy_v2.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: "--font-shuneet"
})

export default function Home() {
  return (
    <main className={`w-full pt-8 px-4 ${shuneet.variable}`}>
      <div className="bg-[#FEFEFE] max-w-[800px] mx-auto shadow-lg pt-8 rounded-md font-shuneet">
        <div className="mx-8 md:w-1/2 md:mx-auto flex flex-col gap-8">
            <Image
              src={"/sharky-soaps-logo.svg"}  
              alt="Sharky Soaps Logo"
              width={985}
              height={534}
            />
            <div>
              <h1 className="font-semibold uppercase text-4xl">Soap</h1>
              <MenuItem name="large bar" price={3} />
              <MenuItem name="small bar" price={1} />
              <MenuItem name="holiday bar" price={3} />
              <MenuItem name="alphabets" price={1} quantity={2} />
            </div>
            <div>
              <h1 className="font-semibold uppercase text-4xl">Sugar Scrub</h1>
              <MenuItem name="large" price={12} />
            </div>
            <div>
              <header>
                <h1 className="font-semibold uppercase text-4xl">Hair Glitter</h1>
                <div className="text-xl font-semibold">*any color avialabile</div>
              </header>
              <MenuItem name="large" price={12} />
              <MenuItem name="small" price={5} />
            </div>
        </div>
        <div className="w-full bg-[#B1EDF6] px-8 py-2 mt-8">
          <div className="text-center md:text-left text-xl font-semibold mx-auto uppercase text-pretty">available scents for soaps and scrubs</div>
          <ul className="text-center columns-2 md:text-left md:columns-3 text-xl">
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Apple Pie</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Blueberry</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Bubble Gum</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Coconut</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Cotton Candy</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Eucalyptus</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Harvest Spice</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Lavender</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Lemon</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Marshmellow</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Strawberry</li>
            <li className="leading-5"><span className="hidden md:inline">&#9679;</span>Sugar Cookie</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
