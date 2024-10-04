import React from 'react';
import { Text } from '@mantine/core';
import styles from '../styles/message.module.css';
import { Loader } from './loader';
import { MarkdownAi } from './markdown';
import { useMediaQuery } from '@mantine/hooks';

interface MessageProps {
  message: string;
  sender: string;
  isLoading: boolean;
}

export const Message: React.FC<MessageProps> = ({ message, sender, isLoading }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div style={{borderRadius: isMobile ? '0px' : '8px'}} className={sender === 'user' ? styles.userMessage : styles.botMessage}>
      <Text style={{ fontWeight: 'bold' }}>{sender === 'user' ? 'You' : 'Sparkchat'}</Text>
      <div style={{marginTop:'0.22vh'}}>
      {isLoading && sender === 'bot' && <Loader />}
      </div>
      <MarkdownAi content={message || ''} isStreaming={true}/>
    </div>
  );
};
