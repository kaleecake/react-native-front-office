import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Account from "./Account"

export default function NavigationPage() {
  const screens = [
    { name: "Home", component: Home, icon: "home-outline" },
    { name: "Acco", component: Account, icon: "person-outline" },
    // { name: "Settings", component: Settings, icon: "settings-outline" },
  
  ];

  return <Navigation screens={screens} />;
}
