export default function AuthLayout({ title, children }) {
  return (
    <div id="site-wrap" className="flex flex-col h-full antialiased">
      <main className="flex items-center justify-center min-h-full py-8 lg:py-12">
        <div className="container max-w-md">
          <div className="text-center">
            <a href="/" className="flex flex-col text-2xl font-bold tracking-tight uppercase reset-link md:text-3xl text-primary-500">
              <img src="/images/icon.svg" width="132" height="100" className="block w-auto fill-current h-14" alt="Dartology icon" />
              <span className="block mt-1 text-sm">Dartology</span>
            </a>
          </div>

          <h1 className="mt-2 text-center">{title}</h1>

          <div className="p-6 mt-8 border border-gray-800 rounded bg-gradient-radial-at-b from-gray-900 to-black">
            {/* <x-auth.session-status className="mb-4" :status="session('status')" /> */}
            {/* <x-auth.validation-errors className="mb-4" :errors="$errors" /> */}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
