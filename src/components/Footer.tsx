export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">
            Y
          </span>
          <span>© {new Date().getFullYear()} Yulianto. All rights reserved.</span>
        </div>
        <div>Crafted with care · Built for scale</div>
      </div>
    </footer>
  );
}
