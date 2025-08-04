import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@educationtrust.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white/80">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-white/80">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-white/80">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
