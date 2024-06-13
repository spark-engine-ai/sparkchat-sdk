// components/input.tsx
import React, { useState, KeyboardEvent } from 'react';
import { Textarea, ActionIcon, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import styles from '../styles/input.module.css';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSendClick = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (isMobile) {
      // Mobile: Enter key inserts a new line
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        setInputValue((prev) => prev + '\n');
      }
    } else {
      // Desktop: Shift + Enter inserts a new line, Enter sends message
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          // Insert a new line
          setInputValue((prev) => prev + '\n');
        } else {
          // Send message
          event.preventDefault();
          handleSendClick();
        }
      }
    }
  };

  return (
    <Group className={styles.chatInput}>
      <Textarea
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message"
        className={styles.input}
        autosize
        minRows={1}
      />
      <ActionIcon variant="subtle" onClick={handleSendClick}>
        <IconSend />
      </ActionIcon>
    </Group>
  );
};
