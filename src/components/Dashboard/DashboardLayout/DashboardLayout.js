import React, { useState } from "react";
import CustomHead from "@components/Utilities/CustomHead/CustomHead";
import DashboardDestopNav from "@components/Dashboard/DashboardDesktopNav/DashboardDesktopNav";
import DashboardMobileNav from "@components/Dashboard/DashboardMobileNav/DashboardMobileNav";
import DashboardHeader from "@components/Dashboard/DashboardHeader/DashboardHeader";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const DashboardLayout = ({ children }) => {
  const [navState, setNavState] = useState(true);
  const router = useRouter();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-90">
      <CustomHead title={`Dashboard | Let's get you ready to go`} />
      <DashboardDestopNav />
      <DashboardMobileNav isOpen={navState} />
      <div className="flex flex-col flex-1 w-full">
        <DashboardHeader navState={navState} setNavState={setNavState} />
        <div className="p-5 bg-gray-50 mt-9 md:ml-64">
          <div className="bg-gray-50">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                  pageExit: {
                    opacity: 0,
                  },
                }}
                exit="pageExit"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
