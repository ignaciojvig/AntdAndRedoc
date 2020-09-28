import React from "react";
import queryString from "query-string";
import { RedocStandalone } from "redoc";

export const ApiDoc = () => {
  const parsedUrl = queryString.parse(window.location.search);
  //  `#e30613`
  const specUrl = parsedUrl.url as string;
  const primaryColor = `#${parsedUrl.primary as string}`;

  return (
    <RedocStandalone
      specUrl={specUrl}
      options={{
        nativeScrollbars: true,
        theme: {
          colors: {
            primary: {
              main: primaryColor,
            },
          },
        },
      }}
    />
  );
};
