import { QueryClientProvider } from "react-query";
import "@styles/globals.css";
import { Hydrate } from "react-query/hydration";
import { useQueryClientAndsettings } from "@config/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { queryClient } = useQueryClientAndsettings();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
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
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
