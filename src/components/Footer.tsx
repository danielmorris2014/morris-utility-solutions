export default function Footer() {
  return (
    <footer className="mt-16 section-divider bg-white">
      <div className="container py-10 text-sm text-gray-600 grid md:grid-cols-2 gap-4 items-center">
        <p>© {new Date().getFullYear()} Morris Utility Solutions. All rights reserved.</p>
        <p className="md:text-right">Reliable GIS for utilities & contractor crews.</p>
      </div>
    </footer>
  );
}
