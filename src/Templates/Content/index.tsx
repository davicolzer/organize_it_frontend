import { BoxProps, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

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
        <title>{`Organize_it | ${titlePage}`}</title>
      </Head>
      <Flex {...rest}>
      <Sidebar />
        <Stack width={"100%"} px={10}>

          <Header titlePage={titlePage}/>
      
        {children}
        </Stack>
      </Flex>
    </>
  );
}
