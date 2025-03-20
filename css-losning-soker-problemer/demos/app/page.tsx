"use client";

import { Box, Heading, HStack, VStack, Link } from "@navikt/ds-react";
import NextLink from "next/link";

const VSpace = () => {
  return <div style={{ height: "2rem" }}></div>;
};

const createSourcedLink = (inputLink: string) => {
  return (
    <HStack gap="2">
      <Box asChild>
        <Link as={NextLink} href={`/demos/${inputLink}`}>
          {inputLink}
        </Link>
      </Box>
      <Box asChild>
        <Link
          as={NextLink}
          href={`https://github.com/JulianNymark/presentations/tree/main/css-losning-soker-problemer/demos/app/demos/${inputLink}/page.tsx`}
        >
          (source)
        </Link>
      </Box>
    </HStack>
  );
};

const niceDate = (date: Date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

export default function Page() {
  return (
    <main>
      <VSpace />
      <Heading level="1" size="large">
        Presentasjoner
      </Heading>
      <VStack marginBlock="10" gap={"4"}>
        <Heading level="2" size="medium">
          CSS Løsning søker problemer ({niceDate(new Date(2025, 2, 20))})
        </Heading>
        {createSourcedLink("container-queries")}
        <HStack gap="2">
          <Link
            href={
              "https://main--66b4b3beb91603ed0ab5c45e.chromatic.com/?path=/story/ds-react-search--default&globals=mode:darkside"
            }
          >
            has
          </Link>
          <Link
            href={
              "https://github.com/navikt/aksel/blob/46c0f434cf91a176815dd476a3b03a1d076bfc29/%40navikt/core/css/darkside/form/search.darkside.css#L28"
            }
          >
            (source)
          </Link>
        </HStack>
        <Link
          href={`https://lightningcss.dev/playground/#%7B%22minify%22%3Afalse%2C%22customMedia%22%3Atrue%2C%22cssModules%22%3Afalse%2C%22analyzeDependencies%22%3Afalse%2C%22targets%22%3A%7B%22chrome%22%3A7864320%2C%22firefox%22%3A7667712%7D%2C%22include%22%3A0%2C%22exclude%22%3A0%2C%22source%22%3A%22main%20%7B%5Cn%20%20%26%3Afocus-within%20%7B%5Cn%20%20%20%20.my-div%20%7B%5Cn%20%20%20%20%20%20background%3A%20red%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22%2C%22visitorEnabled%22%3Afalse%2C%22visitor%22%3A%22%7B%5Cn%20%20Color(color)%20%7B%5Cn%20%20%20%20if%20(color.type%20%3D%3D%3D%20'rgb')%20%7B%5Cn%20%20%20%20%20%20color.g%20%3D%200%3B%5Cn%20%20%20%20%20%20return%20color%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%7D%22%2C%22unusedSymbols%22%3A%5B%5D%2C%22version%22%3A%22local%22%7D`}
        >
          nesting
        </Link>
        {createSourcedLink("property")}
        <Link href={"#"}>starting-style</Link>
      </VStack>
    </main>
  );
}
