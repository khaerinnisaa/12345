import { useDrawer } from "@/contexts/DrawerContext";
import { logout } from "@/service/api";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const NavbarDashboardLogic = () => {
  const { setLoadingRoute } = useDrawer();
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");

  // ketika logo dan Genbi UINAM di klik
  const handleClick = () => {
    if (pathname !== "/dashboard") {
      setLoading(true);
      router.push("/dashboard");
    }
  };

  const handleMenuClick = async (val) => {
    console.log(val.router, "tesss");
    const delayTime = 2500;

    if (
      val.router !== "" &&
      val.router !== pathname &&
      val.router !== "/logout"
    ) {
      // setLoading(true);
      setLoadingRoute(true);
      router.push(val.router);
      // await new Promise((resolve) => setTimeout(resolve, delayTime));
    } else if (val.router === "/login") {
      console.log("tes");
    } else if (val.router === "/logout") {
      // value.hand
      handleLogout();
    }
  };

  const handleLogout = async () => {
    logout(`/logout`, token).then(() => {
      //remove token from cookies
      Cookies.remove("token");

      //redirect halaman login
      router.push("/login");
    });
  };

  return {
    value: { pathname, router, loading },
    func: {
      handleMenuClick,
      handleClick,
    },
  };
};

export default NavbarDashboardLogic;
