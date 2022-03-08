import { Box, BoxProps, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface ContentProps extends BoxProps {
  titlePage: string;
  children: ReactNode;
}

export function Content({
  titlePage,
  children,
  ...rest
}: ContentProps) {
  return (
    <>
      <Head>
        <title>{`Bought_it | ${titlePage}`}</title>
      </Head>
      <Flex flex={1} maxWidth={1480} px={6} mx={"auto"} {...rest}>
      <Sidebar />
        <Stack width={"100%"}>

          <Header titlePage={titlePage}/>
      
        {children}
        </Stack>
      </Flex>
    </>
  );
}
