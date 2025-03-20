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
        <Link href={`/demos/${inputLink}`}>{inputLink}</Link>
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
        {createSourcedLink("has")}
        {createSourcedLink("nesting")}
        {createSourcedLink("property")}
        {createSourcedLink("starting-style")}
      </VStack>
    </main>
  );
}
