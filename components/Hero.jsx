export default function Hero({ heading, children }) {
  return (
    <div className="relative py-8 overflow-hidden border-b border-gray-700 bg-gradient-radial-at-b from-gray-900 to-black lg:py-16">
      <div className="container">
        <h1 className="mb-4 lg:text-5xl">{heading}</h1>
        {children}
      </div>
    </div>
  );
}
