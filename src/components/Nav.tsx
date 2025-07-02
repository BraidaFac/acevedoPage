import { useEffect, useState } from "react";

// Definición de tipos para TypeScript (opcional)
type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const Navbar = () => {
  // Estado para controlar el menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Estado para controlar los dropdowns móviles
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<
    Record<number, boolean>
  >({});
  // Estado para controlar los dropdowns desktop
  const [openDesktopDropdowns, setOpenDesktopDropdowns] = useState<
    Record<number, boolean>
  >({});

  // Definir los elementos de navegación
  const navItems: NavItem[] = [
    {
      label: "Inicio",
      href: "/",
    },

    {
      label: "¿Qué necesitas tratar?",
      href: "#",
      children: [
        {
          label: "Rejuvenecimiento íntimo",
          href: "/info/rejuvenecimiento-intimo",
        },
        { label: "Atrofia genital", href: "/info/atrofia-genital" },
        {
          label: "Incontinencia urinaria",
          href: "/info/incontinencia-urinaria",
        },
        { label: "Hiperlaxitud vaginal", href: "/info/hiperlaxitud-vaginal" },
        { label: "Cicatriz de cesárea", href: "/info/cicatriz-cesarea" },
        { label: "Cicatriz episiotomia", href: "/info/cicatriz-episiotomia" },
        { label: "Flacidez", href: "/info/flacidez" },
        { label: "Celulitis", href: "/info/celulitis" },
        { label: "Adiposidad localizada", href: "/info/adiposidad-localizada" },
      ],
    },
    {
      label: "Tratamientos",
      href: "#",
      children: [
        { label: "Enygma", href: "/tratamientos/enygma" },
        { label: "HImFU", href: "/tratamientos/himfu" },
        { label: "Cryo-RF MAX", href: "/tratamientos/cryo-rf-max" },
        { label: "Refreeze", href: "/tratamientos/refreeze" },
        {
          label: "Radiofrecuencia en cicatriz",
          href: "/tratamientos/radiofrecuencia-cicatriz",
        },
      ],
    },
    {
      label: "Post Parto",
      href: "/postparto",
    },
    {
      label: "Nutrición",
      href: "/nutricion",
    },
    {
      label: "Menopausia",
      href: "/menopausia",
    },
    {
      label: "Contacto",
      href: "#contact",
    },
  ];

  // Ordenar los hijos alfabéticamente
  const sortedNavItems = navItems.map((item) => {
    if (item.children) {
      return {
        ...item,
        children: [...item.children].sort((a, b) =>
          a.label.localeCompare(b.label)
        ),
      };
    }
    return item;
  });

  // Función para alternar dropdown móvil
  const toggleMobileDropdown = (index: number) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Función para alternar dropdown desktop
  const toggleDesktopDropdown = (index: number) => {
    setOpenDesktopDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Función para abrir solo un dropdown específico en desktop
  const openDesktopDropdown = (index: number) => {
    setOpenDesktopDropdowns({
      [index]: true,
    });
  };

  // Función para cerrar todos los dropdowns desktop
  const closeAllDesktopDropdowns = () => {
    setOpenDesktopDropdowns({});
  };

  // Cerrar todos los dropdowns cuando se cierra el menú móvil
  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenMobileDropdowns({});
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={"/src/assets/logoNav.svg"}
            alt="Logo Dra. Cecilia Acevedo"
            className="h-10 lg:h-14 w-auto"
          />
        </a>

        {/* Hamburger Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto ${
            mobileMenuOpen ? "" : "hidden"
          }`}
          id="navbar-menu"
          onMouseLeave={closeAllDesktopDropdowns}
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
            {sortedNavItems.map((item, index) => (
              <li
                key={index}
                className={item.children ? "lg:relative lg:group" : ""}
              >
                {/* Si no tiene hijos, es un enlace simple */}
                {!item.children ? (
                  <a
                    href={item.href}
                    className="text-title-100 hover:text-primary-100 block py-2 px-3 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:p-0"
                  >
                    {item.label}
                  </a>
                ) : (
                  <>
                    {/* Versión móvil del dropdown */}
                    <button
                      type="button"
                      className="flex justify-between items-center w-full py-2 px-3 text-title-100 hover:text-primary-100 hover:bg-gray-100 lg:hover:bg-transparent rounded-sm lg:hidden"
                      aria-controls={`mobile-menu-${index}`}
                      aria-expanded={openMobileDropdowns[index]}
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      {item.label}
                      <svg
                        className={`w-2.5 h-2.5 ml-2.5 transition-transform ${
                          openMobileDropdowns[index] ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id={`mobile-menu-${index}`}
                      className={`lg:hidden ${
                        openMobileDropdowns[index] ? "" : "hidden"
                      }`}
                    >
                      <ul className="py-2 space-y-2 pl-3">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <a
                              href={child.href}
                              className="block text-sm py-2 px-3 text-title-100 hover:text-primary-100 hover:bg-gray-100 rounded-sm"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Versión desktop del dropdown */}
                    <div className="relative hidden lg:block">
                      <button
                        type="button"
                        className="text-title-100 hover:text-primary-100 flex items-center py-2 px-3 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:p-0"
                        id={`dropdown-${index}-button`}
                        aria-expanded={openDesktopDropdowns[index]}
                        onClick={() => toggleDesktopDropdown(index)}
                        onMouseEnter={() => openDesktopDropdown(index)}
                      >
                        {item.label}
                        <svg
                          className={`w-2.5 h-2.5 ml-2 transition-transform ${
                            openDesktopDropdowns[index] ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id={`dropdown-${index}`}
                        className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 absolute ${
                          openDesktopDropdowns[index] ? "block" : "hidden"
                        }`}
                        onMouseEnter={() => openDesktopDropdown(index)}
                      >
                        <ul
                          className="text-sm"
                          aria-labelledby={`dropdown-${index}-button`}
                        >
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <a
                                href={child.href}
                                className={`block px-4 py-2 hover:bg-gray-100 hover:text-primary-100 text-title-100 transition-colors duration-200
                                ${childIndex === 0 ? "rounded-t-lg" : ""}
                                ${
                                  childIndex ===
                                  (item.children?.length ?? 0) - 1
                                    ? "rounded-b-lg"
                                    : ""
                                }`}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
