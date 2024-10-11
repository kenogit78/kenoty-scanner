"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const [openNavigation, setOpenNavigation] = useState(false);

  //   const toggleNavigation = () => {
  //     if (!openNavigation) {
  //       setOpenNavigation(true);
  //       // console.log(openNavigation);
  //     } else {
  //       setOpenNavigation(false);
  //       // console.log(openNavigation);
  //     }
  //   };
  return (
    <div className="relative lg:flex overflow-hidden">
      <div className={`flex md:h-full md:w-64 flex-col fixed inset-y-0 z-50`}>
        {/* <!-- Sidebar --> */}
        <Sidebar
        //   openNavigation={openNavigation}
        //   toggleNavigation={toggleNavigation}
        />
      </div>

      <div className="flex flex-col flex-grow md:ml-64">
        {/* <!-- Main content area --> */}
        <Header
        //   toggleNavigation={toggleNavigation}
        //   openNavigation={openNavigation}
        />
        <div className="mb-14">{children}</div>
      </div>
    </div>
  );
}
