import { AppShell, Box, Burger, Center, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function BasicAppShell({ children }: React.PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Center>
          <Box id="fake-limited-container" maw={"20dvw"}>
            {children}
          </Box>
        </Center>
      </AppShell.Main>
    </AppShell>
  );
}
