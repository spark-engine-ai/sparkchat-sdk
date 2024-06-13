// components/Navbar.tsx
import React from 'react';
import { Button, Group, Box, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import styles from '../styles/navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <Box h={60} className={styles.navbar}>
      <Group className={styles.group}>
        <Title order={3}>Spark Engine</Title>
        <Group>
          <Button
            component="a"
            href="https://github.com/spark-engine-ai/sparkchat-sdk"
            target="_blank"
            rel="noopener noreferrer"
            color="dark"
            leftSection={<IconBrandGithub />}
          >
            Github
          </Button>
          <Button
            component="a"
            href="https://sparkengine.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Button>
        </Group>
      </Group>
    </Box>
  );
};
