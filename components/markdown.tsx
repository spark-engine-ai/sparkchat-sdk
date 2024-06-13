import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { IconClipboard } from '@tabler/icons-react';
import { ActionIcon, Box } from '@mantine/core';
import { css } from '@emotion/react';
import { useMediaQuery } from "@mantine/hooks";
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
  isStreaming: boolean;
}

const Header = styled.div`
  align-items: center;
  justify-content: flex-end;
  background: #191919;
  height: 2.5rem;
  padding: 0.1rem 0.1rem 0 0.5rem;
`;

const CodeBlockContainer = styled.div`
  max-width: 100%;
  overflow: auto;
`;

const Code = styled.div`
  padding: 0;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const StyledMarkdown = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
    display: block;
  }
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
  }
`;

export const MarkdownAi: FunctionComponent<MarkdownProps> = ({ content = '', isStreaming = false }) => {
  const isMobile = useMediaQuery("(max-width: 480px)");

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const [animatedContent, setAnimatedContent] = useState<string>("");
  const [lastLength, setLastLength] = useState<number>(0);

  useEffect(() => {
    if (isStreaming && content.length > lastLength) {
      const timeoutId = setTimeout(() => {
        setAnimatedContent(content.slice(0, lastLength + 1));
        setLastLength(lastLength + 1);
      }, 3);

      return () => clearTimeout(timeoutId);
    } else if (!isStreaming) {
      setAnimatedContent(content);
      setLastLength(content.length);
    }
  }, [content, lastLength, isStreaming]);

  return (
    <div>
      <StyledMarkdown>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            const shouldApplySpecialStyling = String(children).startsWith('$$!');
            const contentToDisplay = shouldApplySpecialStyling ?
              String(children).slice(3) :
              String(children);
            return !inline && match ? (
              <>
                <Code style={{ width: isMobile ? "80vw" : "60vw" }}>
                  <Header style={{ borderTopLeftRadius: '6px', borderTopRightRadius: '6px', display: 'flex' }}>
                    <ActionIcon
                      style={{ right: '5px', float: 'right' }}
                      variant="transparent"
                      color="white"
                      onClick={() => copyToClipboard(String(children).replace(/\n$/, ''))}
                    >
                      <IconClipboard size="1rem" style={{ marginRight: '3px', color: 'white' }} />
                    </ActionIcon>
                  </Header>
                  <Box style={{ marginTop: '-1vh' }}>
                    <CodeBlockContainer>
                      {shouldApplySpecialStyling ? (
                        <SyntaxHighlighter
                          css={css`
                            max-width: 100%;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            overflow-x: auto;
                            line-height: 0.5;
                            letter-spacing: -2.5px;
                          `}
                          style={vscDarkPlus as any}
                          language={match?.[1] || 'text'}
                          PreTag="div"
                          {...props}
                        >
                          {contentToDisplay}
                        </SyntaxHighlighter>
                      ) : (
                        <SyntaxHighlighter
                          css={css`
                            max-width: 100%;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            overflow-x: auto;
                          `}
                          style={vscDarkPlus as any}
                          language={match?.[1] || 'text'}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      )}
                    </CodeBlockContainer>
                  </Box>
                </Code>
              </>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {animatedContent}
      </ReactMarkdown>
      </StyledMarkdown>
    </div>
  );
};