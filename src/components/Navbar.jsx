import Logo from "../assets/lws-logo-en.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-10" src={Logo} alt="Lws" />
          </a>

          <a
            className="px-5 py-2 hover:bg-slate-700  bg-[#172227] rounded-[44px]"
            href="#"
          >
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
}
