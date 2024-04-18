

export default function Footer(){
    return (
      <footer className="bg-[#334E68] text-white p-6  w-full">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="font-bold font-roboto">Contact Us</h2>
            <p className="font-crimson-text">Email: info@psychtests.com</p>
            <p className="font-crimson-text">Phone: +123 456 7890</p>
          </div>
          <div>
            <p className="text-sm font-crimson-text">
              © 2023 Psychological Tests. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}